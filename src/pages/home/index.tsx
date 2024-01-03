import Footer from '@/pages/home/Footer'
import Header from '@/pages/home/Header'
import Part1 from '@/pages/home/Part1'
import Part2 from '@/pages/home/Part2'
import Part3 from '@/pages/home/Part3'
import * as React from 'react'

function Home() {
  return (
    <div>
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </div>
  )
}

export default React.memo(Home)
