import Account from '@/pages/c/Wallet/Account'
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

  return <div>{address ? <Account /> : <span onClick={handleClick}>Connect Wallet</span>}</div>
}

export default Index
