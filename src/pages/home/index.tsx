import Assets from '@/pages/home/Assets'
import Mint from '@/pages/home/Mint'
import Footer from '@/pages/home/c/Footer'
import Header from '@/pages/home/c/Header'
import Slogan from '@/pages/home/c/Slogan'
import * as React from 'react'

function Index() {
  return (
    <div>
      <Header />
      <Slogan />
      <Mint />
      <Assets />
      <Footer />
    </div>
  )
}

export default React.memo(Index)
