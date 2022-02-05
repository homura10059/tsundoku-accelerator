import { ItemDetail, ItemHistory, WishListDetail } from './models'

type Key = keyof Omit<ItemHistory, 'id' | 'scrapedAt' | 'itemId'>
const pickNumberList = (from: ItemHistory[], key: Key): number[] =>
  from.map(x => x[key]).filter<number>((x): x is number => x !== undefined)

export const convertItemDetail = (from: ItemDetail) => {
  const price = pickNumberList(from.itemHistories, 'price')
  const points = pickNumberList(from.itemHistories, 'points')
  const pointsRate = pickNumberList(from.itemHistories, 'pointsRate')
  const discount = pickNumberList(from.itemHistories, 'discount')
  const discountRate = pickNumberList(from.itemHistories, 'discountRate')
  return {
    ...from,
    minPrice: Math.min(...price),
    maxPoints: Math.max(...points),
    maxPointsRate: Math.max(...pointsRate),
    maxDiscount: Math.max(...discount),
    maxDiscountRate: Math.max(...discountRate)
  }
}

export const convertWishListDetail = ({
  wishLists_to_items,
  ...other
}: WishListDetail) => {
  const itemData = wishLists_to_items.flatMap(x => x.items)
  return {
    ...other,
    items: itemData.map(convertItemDetail)
  }
}
