import Footer from '@/pages/home/c/Footer'
import Header from '@/pages/home/c/Header'
import Slogan from '@/pages/home/c/Slogan'
import Assets from '@/pages/home/h5/Assets'
import Mint from '@/pages/home/h5/Mint'
import * as React from 'react'

function Index() {
  return (
    <div className="h5">
      <Header />
      <Slogan />
      <Mint />
      <Assets />
      <Footer />
    </div>
  )
}

export default React.memo(Index)
