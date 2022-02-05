import { definitions } from './generated/supabase'

export type Item = definitions['items']

export type ItemHistory = definitions['itemHistories']

export type ItemDetail = definitions['items'] & {
  itemHistories: ItemHistory[]
}

export type WishList = definitions['wishLists']

export type WishListDetail = WishList & {
  wishLists_to_items: {
    wishListId: string
    itemId: string
    items: ItemDetail
  }[]
}

export type User = {
  id: string
  users_to_wishLists: {
    userId: string
    wishListId: string
    wishLists: WishListDetail[]
  }[]
}
