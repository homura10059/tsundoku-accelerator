import type { MetaFunction } from 'remix'

import DashBord from '../components/domain/DashBord'

export const meta: MetaFunction = () => {
  return {
    title: 'DashBord',
    description: 'Welcome!!'
  }
}

export default function Index() {
  return <DashBord />
}
