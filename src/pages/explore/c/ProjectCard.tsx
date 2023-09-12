import Image from '@/components/common/Image'

export const ProjectCard = () => {
  return (
    <dl className="xyz-project-card">
      <dt>
        <Image src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1hb2FmeWpCeTk3TktFUFp6QUQzRks4UmN3Q0pIYjI2M2RESmJoQ2FYUFdwbw==" />
        <div className="info">
          <span>Bored Ape Yacht Club</span>
          <span>Floor: 28 ETH</span>
        </div>
      </dt>
      <dd>
        <span>999.9K ETH</span>
        <span>24h</span>
      </dd>
    </dl>
  )
}
