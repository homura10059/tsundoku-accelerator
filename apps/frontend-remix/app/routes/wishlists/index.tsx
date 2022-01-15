import type { MetaFunction } from 'remix'

import WishList from '../../components/domain/WishList'

export const meta: MetaFunction = () => {
  return {
    title: 'wishLists',
    description: 'wish lists data'
  }
}

const Index = () => {
  return <WishList />
}

export default Index
