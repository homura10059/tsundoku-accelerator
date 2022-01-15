import { format } from 'date-fns'
import React from 'react'
import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

import { List } from '../../components/domain/Item/List'
import { WishListDetail } from '../../domain/models'
import { getWishListDetail } from '../../domain/service/wishLists'

type Props = {
  wishList: WishListDetail | null
}

export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id
  if (!itemId) {
    return { wishList: null }
  }
  const wishList = await getWishListDetail(itemId)
  return { wishList }
}

export default function WishList() {
  const data = useLoaderData<Props>()
  const items = data.wishList?.wishLists_to_items.flatMap(d => d.items) ?? []
  return (
    <>
      <h1>
        <a href={data.wishList?.url}>{data.wishList?.title}</a>
      </h1>
      <ul>
        <li>
          更新日時：
          {format(
            new Date((data.wishList?.scrapedAt ?? 0) * 1000),
            'yyyy/MM/dd HH:mm:ss'
          )}
        </li>
      </ul>
      {items && <List items={items} />}
    </>
  )
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data ? `Param: ${data.wishList.title}` : 'Oops...'
  }
}
