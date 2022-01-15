import type { MetaFunction } from 'remix'

import User from '../../components/domain/User'

export const meta: MetaFunction = () => {
  return {
    title: 'user',
    description: 'user profile'
  }
}

const Index = () => {
  return <User />
}

export default Index
