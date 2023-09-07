import { Button } from '@arco-design/web-react'
import { IconHeart } from '@arco-design/web-react/icon'

export default function UserCard() {
  return (
    <div className="xyz-user-card">
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
