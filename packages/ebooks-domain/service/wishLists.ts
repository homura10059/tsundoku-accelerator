import { supabase } from '../libs/auth'
import { WishListDetail } from '../models'
import { getUser } from './user'

export const getWishListDetail = async (
  wishListId: string
): Promise<WishListDetail | null> => {
  const { data: wishLists, error } = await supabase
    .from<WishListDetail>('wishLists')
    .select(
      `
      *,
      wishLists_to_items (
        *,
        items ( * )
      )
    `
    )
    .eq('id', wishListId)
  if (error || wishLists === null || wishLists.length !== 1) {
    return null
  }
  return wishLists[0]
}

export const getWishLists = async (
  userId: string
): Promise<WishListDetail[] | null> => {
  const user = await getUser(userId)
  if (user === null || user.users_to_wishLists.length === 0) {
    return null
  }
  return user.users_to_wishLists.flatMap(d => d.wishLists)
}
