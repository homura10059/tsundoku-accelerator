import { supabase } from '../libs/auth'
import { ItemDetail } from '../models'

export const getItemDetail = async (
  itemId: string
): Promise<ItemDetail | null> => {
  const { data: items, error } = await supabase
    .from<ItemDetail>('items')
    .select(
      `
      *,
      itemHistories (*)
    `
    )
    .eq('id', itemId)
  if (error || items === null || items.length !== 1) {
    return null
  }
  return items[0]
}
