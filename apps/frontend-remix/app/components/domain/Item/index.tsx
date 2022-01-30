import cx from 'classnames'
import { Item as ItemProps } from 'domain-driven/models'
import { getJstString } from 'pure-functions/libs/dates'
import React from 'react'

export const Item: React.VFC<ItemProps> = ({
  title,
  scrapedAt,
  thumbnailUrl
}) => {
  return (
    <dl className={'flex gap-x-2'}>
      <div className={'order-2'}>
        <dt className={'text-lg'}>{title}</dt>
        <dd className={'text-sm'}>
          更新日時: {scrapedAt ? getJstString(scrapedAt) : '----'}
        </dd>
      </div>
      {thumbnailUrl && (
        <dd className={'order-1'}>
          <img
            className={cx('h-[135px] min-w-[102px]')}
            src={thumbnailUrl}
            alt={`${title}の表紙`}
          />
        </dd>
      )}
    </dl>
  )
}
