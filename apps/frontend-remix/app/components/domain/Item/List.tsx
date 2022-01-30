import { Item as ItemProps } from 'domain-driven/models'
import React from 'react'
import { Link } from 'remix'

import { CardList } from '../../headless/CardList'
import { Item } from './index'

type Props = {
  items: ItemProps[]
}

export const List: React.VFC<Props> = ({ items }) => {
  return (
    <CardList>
      {items.map(item => (
        <Link to={`/items/${item.id}`}>
          <Item {...item} />
        </Link>
      ))}
    </CardList>
  )
}
