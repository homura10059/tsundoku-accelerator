import { UserCircleIcon } from '@heroicons/react/outline'
import { Session } from '@supabase/gotrue-js/src/lib/types'
import cx from 'classnames'
import React from 'react'

type Props = {
  session: Session | null
}
export const Avatar: React.VFC<Props> = ({ session }) => {
  const size = 'w-10 h-10'

  if (session === null || session.user === null) {
    return <UserCircleIcon className={size} />
  }
  const avatarUrl = session.user.user_metadata['avatar_url']
  const name = session.user.user_metadata['name']
  return (
    <img
      className={cx([size, 'bg-cover', 'rounded-full'])}
      src={avatarUrl}
      alt={name}
    />
  )
}

export default Avatar
