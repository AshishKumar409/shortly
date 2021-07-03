import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne} from './Data'
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
