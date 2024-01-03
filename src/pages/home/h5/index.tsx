import Footer from '@/pages/home/h5/Footer'
import Header from '@/pages/home/h5/Header'
import Part1 from '@/pages/home/h5/Part1'
import Part2 from '@/pages/home/h5/Part2'
import Part3 from '@/pages/home/h5/Part3'
import * as React from 'react'

function Index() {
  return (
    <div className="h5">
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </div>
  )
}

export default React.memo(Index)
