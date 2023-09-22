import useGlobalInit from '@/hooks/useGlobalInit'
import { useScroll2Top } from '@/hooks/useScroll2Top'
import { FastClient } from '@/pages/c/FastClient'
import Footer from '@/pages/c/Footer'
import Header from '@/pages/c/Header'
import { InterceptConnect } from '@/pages/connect'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'

const Test = loadable(() => import('@/pages/test'))
const Home = loadable(() => import('@/pages/home'))
const Explore = loadable(() => import('@/pages/explore'))
const Sell = loadable(() => import('@/pages/sell'))
const Connect = loadable(() => import('@/pages/connect'))
const Notification = loadable(() => import('@/pages/notification'))
const NFTs = loadable(() => import('@/pages/explore/nfts'))
const Users = loadable(() => import('@/pages/explore/users'))
const Collections = loadable(() => import('@/pages/explore/collections'))
const Marketplaces = loadable(() => import('@/pages/explore/marketplaces'))
const User = loadable(() => import('@/pages/user'))
const Owned = loadable(() => import('@/pages/user/owned'))
const Sale = loadable(() => import('@/pages/user/sale'))
const Created = loadable(() => import('@/pages/user/created'))
const Sold = loadable(() => import('@/pages/user/sold'))
const UCollections = loadable(() => import('@/pages/user/collections'))
const Activity = loadable(() => import('@/pages/user/activity'))
const Settings = loadable(() => import('@/pages/user/settings'))
const Profile = loadable(() => import('@/pages/user/settings/profile'))
const Create = loadable(() => import('@/pages/create'))
const Create721 = loadable(() => import('@/pages/create/standard721'))
const Create1155 = loadable(() => import('@/pages/create/standard1155'))

function App() {
  useScroll2Top()
  useGlobalInit()

  return (
    <div id="app-container">
      <Header />
      <div className="xyz-content-main">
        <Routes>
          <Route path="/" element={<Navigate to="/explore/items" />} />
          <Route
            path="/login"
            element={
              <InterceptConnect>
                <Connect />
              </InterceptConnect>
            }
          />
          <Route path="/user" element={<User />}>
            <Route path="owned" element={<Owned />} />
            <Route path="sale" element={<Sale />} />
            <Route path="collections" element={<UCollections />} />
            <Route path="created" element={<Created />} />
            <Route path="activity" element={<Activity />} />
            <Route path="sold" element={<Sold />} />
            <Route index element={<Navigate to="owned" />} />
          </Route>
          <Route path="/user/settings" element={<Settings />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Profile />} />
            <Route path="wallets" element={<Profile />} />
            <Route path="notifications" element={<Profile />} />
            <Route index element={<Navigate to="profile" />} />
          </Route>
          <Route path="/explore" element={<Explore />}>
            <Route path="users" element={<Users />} />
            <Route path="items" element={<NFTs />} />
            <Route path="collections" element={<Collections />} />
            <Route path="marketplaces" element={<Marketplaces />} />
            <Route index element={<Navigate to="items" />} />
          </Route>
          <Route path="/create" element={<Create />}>
            <Route path="erc721" element={<Create721 />} />
            <Route path="erc1155" element={<Create1155 />} />
            <Route index element={<Navigate to="erc721" />} />
          </Route>
          <Route path="/sell" element={<Sell />} />
          <Route path="/notification" element={<Notification />} />
          <Route
            path="/test"
            element={
              <FastClient>
                <Test />
              </FastClient>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
