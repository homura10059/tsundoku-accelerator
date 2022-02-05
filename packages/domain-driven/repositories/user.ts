import { supabase } from '../libs/auth'
import { convertWishListDetail } from './converter'
import { User } from './models'

export const getUser = async (userId: string) => {
  const { data: users, error } = await supabase
    .from<User>('users')
    .select(
      `
      *,
      notification (*),
      users_to_wishLists (
        *,
        wishLists (
          *,
          wishLists_to_items (
            *,
            items (
              *,
              itemHistories (*)
            )
          )
        )
      )
    `
    )
    .eq('id', userId)

  if (error) throw error
  if (users === null || users.length !== 1) return null

  const { id, users_to_wishLists } = users[0]
  const wishListData = users_to_wishLists.flatMap(x => x.wishLists)

  return {
    id,
    wishLists: wishListData.map(convertWishListDetail)
  }
}
