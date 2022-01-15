import React, { useEffect, useState } from 'react'

import { supabase } from '../../../libs/auth'
import { definitions } from '../../../types/generated/supabase'

type Props = {
  id: string
  email?: string
}
export const User: React.VFC<Props> = ({ id, email }) => {
  return (
    <main>
      <ul>
        <li>id: {id}</li>
        <li>email: {email}</li>
      </ul>
    </main>
  )
}

const Connect: React.VFC = () => {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null)
  useEffect(() => {
    const session = supabase.auth.session()
    supabase
      .from<definitions['users']>('users')
      .select('*')
      .eq('id', session?.user?.id)
      .then(({ data: users, error }) => {
        if (error || users === null || users.length === 0) {
          return
        }
        setUser(users[0])
      })
  }, [])

  return user && <User {...user} />
}

export default Connect
