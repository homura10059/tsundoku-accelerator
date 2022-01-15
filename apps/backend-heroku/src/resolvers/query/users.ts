import { supabase } from '../../lib/supabase'
import { definitions } from '../../types/generated/supabase'
import { QueryResolver } from './index'

const users: QueryResolver['users'] = async () => {
  const { data: users, error } = await supabase
    .from<definitions['users']>('users')
    .select('*')

  if (error) throw error
  return users
}

export default { users }
