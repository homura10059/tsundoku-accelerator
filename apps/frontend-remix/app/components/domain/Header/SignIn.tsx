import { LoginIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import React from 'react'
import { Link } from 'remix'

import { supabase } from '../../../libs/auth'

export const SignIn: React.VFC = () => {
  const redirectTo = window.location
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://127.0.0.1:8787/'

  return (
    <Link
      to={'#'}
      onClick={() =>
        supabase.auth.signIn(
          {
            provider: 'discord'
          },
          { redirectTo: redirectTo }
        )
      }
      className={cx(['flex', 'items-center'])}
    >
      <LoginIcon className={cx(['w-5', 'h-5'])} />
      SignIn
    </Link>
  )
}
