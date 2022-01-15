import { Item } from '../models'
import { getUser } from './user'

export const getAllItemsBy = async (userId?: string): Promise<Item[]> => {
  if (!userId) {
    return []
  }

  const user = await getUser(userId)
  if (user === null) {
    return []
  }
  return user.users_to_wishLists
    .flatMap(x => x.wishLists)
    .flatMap(x => x.wishLists_to_items)
    .flatMap(x => x.items)
}
