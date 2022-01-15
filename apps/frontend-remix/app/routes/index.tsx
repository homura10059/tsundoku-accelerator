import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Index',
    description: 'Welcome!!'
  }
}

export default function Index() {
  return <div>index</div>
}
