import { LogoutIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import React from 'react'
import { Link } from 'remix'

import { supabase } from '../../../libs/auth'

export const SignOut: React.VFC = () => {
  return (
    <Link
      to={'#'}
      onClick={() => supabase.auth.signOut()}
      className={cx(['flex', 'items-center', 'text-red-500'])}
    >
      <LogoutIcon className={cx(['w-5', 'h-5'])} />
      SignOut
    </Link>
  )
}
