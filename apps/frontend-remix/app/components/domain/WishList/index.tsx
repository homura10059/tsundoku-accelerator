import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'remix'

import { WishListDetail } from '../../../domain/models'
import { getWishLists } from '../../../domain/service/wishLists'
import { supabase } from '../../../libs/auth'
import { getJstString } from '../../../libs/dates'

type Props = {
  wishListDetails: WishListDetail[]
}

export const ListItem: React.VFC<WishListDetail> = ({
  title,
  scrapedAt,
  id
}) => {
  return (
    <Link to={`/wishlists/${id}`}>
      <dd>
        <dt>{title}</dt>
        <dd>{scrapedAt ? getJstString(scrapedAt) : '----'}</dd>
      </dd>
    </Link>
  )
}

export const WishLists: React.VFC<Props> = ({ wishListDetails }) => {
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
      {wishListDetails.map(wishList => (
        <div className={cx(['block', 'border-2', 'border-black'])}>
          <ListItem {...wishList} />
        </div>
      ))}
    </div>
  )
}

const Connect: React.VFC = () => {
  const [wishListDetails, setWishListDetails] = useState<
    WishListDetail[] | null
  >(null)
  useEffect(() => {
    const session = supabase.auth.session()
    getWishLists(session?.user?.id ?? '').then(data => setWishListDetails(data))
  }, [])

  return wishListDetails && <WishLists wishListDetails={wishListDetails} />
}

export default Connect
