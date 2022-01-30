import cx from 'classnames'
import { format } from 'date-fns'
import { ItemDetail } from 'domain-driven/models'
import { getItemDetail } from 'domain-driven/services/itemHistories'
import { getJstString } from 'pure-functions/libs/dates'
import React, { Suspense } from 'react'
import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

import { ClientOnly } from '../../components/headless/ClientOnly'

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
  if (data.item === null) return null
  return (
    <>
      <dl className={'flex gap-x-2'}>
        <div className={'order-2'}>
          <dt className={'text-lg'}>{data.item.title}</dt>
          <dd className={'text-sm'}>
            更新日時:{' '}
            {data.item.scrapedAt ? getJstString(data.item.scrapedAt) : '----'}
          </dd>
        </div>
        {data.item.thumbnailUrl && (
          <dd className={'order-1'}>
            <img
              className={cx('h-[135px] min-w-[102px]')}
              src={data.item.thumbnailUrl}
              alt={`${data.item.title}の表紙`}
            />
          </dd>
        )}
      </dl>
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
