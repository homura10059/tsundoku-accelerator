import React, { useEffect, useState } from 'react'

import { Item } from '../../../domain/models'
import { getAllItemsBy } from '../../../domain/service/items'
import { supabase } from '../../../libs/auth'
import { List } from '../Item/List'

const Connect: React.VFC = () => {
  const [items, setItems] = useState<Item[] | null>(null)
  useEffect(() => {
    const session = supabase.auth.session()
    getAllItemsBy(session?.user?.id).then(items => {
      setItems(items)
    })
  }, [])

  return items && <List items={items} />
}

export default Connect
