import { supabase } from '../../libs/auth'
import { User } from '../models'

export const getUser = async (userId: string) => {
  const { data: users, error } = await supabase
    .from<User>('users')
    .select(
      `
      id,
      notification (
        userId,
        serviceType,
        webhookUrl
      ),
      users_to_wishLists (
        userId,
        wishListId,
        wishLists (
          id,
          url,
          scrapedAt,
          title,
          wishLists_to_items (
            wishListId,
            itemId,
            items (
              id,
              url,
              scrapedAt,
              title,
              thumbnailUrl
            )
          )
        )
      )
    `
    )
    .eq('id', userId)
  if (error || users === null || users.length !== 1) {
    return null
  }
  return users[0]
}
