import React from 'react'
import Navbar from '../components/homepageComp/Navbar'
import AsideBar from '../components/homepageComp/AsideBar'
import ResultGrid from '../components/homepageComp/ResultGrid'

const HomePage = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <AsideBar/>
      <ResultGrid/>
    </div>
  )
}

export default HomePage
