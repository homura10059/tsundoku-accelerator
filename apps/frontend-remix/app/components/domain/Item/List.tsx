import cx from 'classnames'
import { Item } from 'domain-driven/models'
import { getJstString } from 'pure-functions/libs/dates'
import React from 'react'
import { Link } from 'remix'

import { Card } from '../../headless/Card'

type Props = {
  items: Item[]
}
export const ListItem: React.VFC<Item> = ({
  title,
  scrapedAt,
  id,
  thumbnailUrl
}) => {
  return (
    <Link to={`/items/${id}`}>
      <dl className={'flex gap-x-2'}>
        <div className={'order-2'}>
          <dt className={'text-lg'}>{title}</dt>
          <dd className={'text-sm'}>
            更新日時: {scrapedAt ? getJstString(scrapedAt) : '----'}
          </dd>
        </div>
        {thumbnailUrl && (
          <dd className={'order-1'}>
            <img
              className={cx('h-[135px] min-w-[102px]')}
              src={thumbnailUrl}
              alt={`${title}の表紙`}
            />
          </dd>
        )}
      </dl>
    </Link>
  )
}

export const List: React.VFC<Props> = ({ items }) => {
  return (
    <div
      className={cx([
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'gap-2',
        'auto-cols-auto'
      ])}
    >
      {items.map(item => (
        <Card key={item.id}>
          <ListItem {...item} />
        </Card>
      ))}
    </div>
  )
}
