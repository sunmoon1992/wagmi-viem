import Account from '@/pages/c/Wallet/Account'
import { Button } from '@arco-design/web-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { address } = useAccount()

  const handleClick = () => {
    navigate('/login', {
      state: {
        from: location.pathname
      }
    })
  }

  return <div>{address ? <Account /> : <Button onClick={handleClick}>Connect Wallet</Button>}</div>
}

export default Index
