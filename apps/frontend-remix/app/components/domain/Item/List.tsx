import cx from 'classnames'
import React from 'react'
import { Link } from 'remix'

import { Item } from '../../../domain/models'
import { getJstString } from '../../../libs/dates'

type Props = {
  items: Item[]
}
export const ListItem: React.VFC<Item> = ({ title, scrapedAt, id }) => {
  return (
    <Link to={`/items/${id}`}>
      <dd>
        <dt>{title}</dt>
        <dd>{scrapedAt ? getJstString(scrapedAt) : '----'}</dd>
      </dd>
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
        <div className={cx(['block', 'border-2', 'border-black'])}>
          <ListItem {...item} />
        </div>
      ))}
    </div>
  )
}
