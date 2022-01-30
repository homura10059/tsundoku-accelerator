import { WishListDetail } from 'domain-driven/models'
import { getWishLists } from 'domain-driven/services/wishLists'
import { getJstString } from 'pure-functions/libs/dates'
import React, { useEffect, useState } from 'react'
import { Link } from 'remix'

import { supabase } from '../../../libs/auth'
import { CardList } from '../../headless/CardList'

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
    <CardList>
      {wishListDetails.map(wishList => (
        <ListItem {...wishList} />
      ))}
    </CardList>
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
