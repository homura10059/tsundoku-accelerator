import { format } from 'date-fns'
import React, { Suspense } from 'react'
import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

import { ClientOnly } from '../../components/headless/ClientOnly'
import { ItemDetail } from '../../domain/models'
import { getItemDetail } from '../../domain/service/itemHistories'

const ChartComponent = React.lazy(
  () => import('../../components/domain/Item/Chart')
)

type Props = {
  item: ItemDetail | null
}

export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id
  if (!itemId) {
    return { item: null }
  }
  const item = await getItemDetail(itemId)
  return { item }
}

export default function Items() {
  const data = useLoaderData<Props>()
  const timeline = (data.item?.itemHistories ?? []).map(history => ({
    ...history,
    real: (history.price ?? 0) - (history.points ?? 0),
    timestamp: format(new Date(history.scrapedAt * 1000), 'yyyy/MM/dd')
  }))
  return (
    <>
      <h1>
        <a href={data.item?.url}>{data.item?.title}</a>
      </h1>
      <ul>
        <li>
          更新日時：
          {format(
            new Date((data.item?.scrapedAt ?? 0) * 1000),
            'yyyy/MM/dd HH:mm:ss'
          )}
        </li>
      </ul>
      <ClientOnly>
        <Suspense fallback={<div>Loading...</div>}>
          <ChartComponent timeline={timeline} />
        </Suspense>
      </ClientOnly>
    </>
  )
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : 'Oops...'
  }
}
