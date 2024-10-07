import React from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import Video from '../component/Video'

const page = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Video title={"L2.1: Introduction"} videoID={"qV31Ssoi1mk"} />
    </>
  )
}

export default page