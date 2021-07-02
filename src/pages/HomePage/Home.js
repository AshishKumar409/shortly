import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne,homeObjTwo } from './Data'
import { ShortCode } from '../../components'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />  
      <ShortCode/>
    </>
  )
}

export default Home
