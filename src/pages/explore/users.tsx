import UserCard from '@/pages/explore/c/UserCard'
import { Input } from '@arco-design/web-react'
import { IconSearch, IconUser } from '@arco-design/web-react/icon'
import { times } from 'lodash'

function Users() {
  return (
    <section className="xyz-explore-users">
      <div className="xyz-explore-users-search">
        <Input placeholder="Search by users" prefix={<IconUser />} suffix={<IconSearch />} />
      </div>
      <div className="xyz-explore-users-inner">
        {times(22, function (i) {
          return <UserCard key={i} />
        })}
      </div>
    </section>
  )
}

export default Users
