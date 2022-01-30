import { supabase } from '../libs/auth'
import { User } from '../models'

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
  if (error || users === null || users.length !== 1) {
    return null
  }
  return users[0]
}
