import { BookOpenIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import React from 'react'
import { Link } from 'remix'
import { redirect } from 'remix'

import { supabase } from '../../../libs/auth'
import { NavList } from './NavLink'
import { User } from './User'

export const Header: React.VFC = () => {
  const session = supabase.auth.session()
  if (session === null || session.user === null || session.expires_at) {
    redirect('/')
  }

  return (
    <header
      className={cx(
        'flex',
        'justify-between',
        'content-center',
        'items-center',
        'bg-primary-light',
        'p-1',
        'shadow',
        'sticky top-0' // ヘッダを固定
      )}
    >
      <Link to={'/'}>
        <BookOpenIcon className={'w-10 h-10'} />
      </Link>
      <NavList />
      <User session={session} />
    </header>
  )
}

const Connect: React.VFC = () => {
  return <Header />
}

export default Connect
