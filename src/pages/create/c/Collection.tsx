import { IconPlusCircle } from '@arco-design/web-react/icon'

export const Collection = () => {
  return (
    <div className="collection">
      <label htmlFor="collection">Choose collection</label>
      <div className="bottom">
        <div className="card">
          <IconPlusCircle />
          <span>Create ERC-721</span>
        </div>
        <div className="card">
          <img
            src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jRGFDWWlKSjlWVHFKS3pyVkdBUERMVVg2QzY2SkxSemZiNmszbk1BOXR0bw=="
            alt=""
          />
          <span>Rarible RARI</span>
        </div>
      </div>
    </div>
  )
}
