import { Button, Skeleton } from '@arco-design/web-react'
import { IconHeart } from '@arco-design/web-react/icon'
import * as React from 'react'
import { HTMLAttributes } from 'react'

const UserCard = ({ id }: HTMLAttributes<HTMLElement>, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="xyz-user-card" id={id} ref={ref}>
      <dl>
        <dt>
          <img
            src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
            alt=""
          />
        </dt>
        <dd>
          <div className="xyz-user-card-left">
            <img
              src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
              alt=""
            />
            <div className="xyz-user-card-info">
              <span>Tom James Kobe KobeKobe</span>
              <span>16K Followers</span>
            </div>
          </div>
          <div className="follow-btn">
            <Button size="mini">
              Follow <IconHeart />
            </Button>
          </div>
        </dd>
      </dl>
    </div>
  )
}

export default React.forwardRef(UserCard)

export const UserCardLoading = () => {
  return (
    <div className="xyz-user-card-loading">
      <Skeleton className="img-loading" loading animation text={{ rows: 1 }} />
      <Skeleton className="info-loading" loading animation text={{ rows: 2 }} image={{ shape: 'circle' }} />
    </div>
  )
}
