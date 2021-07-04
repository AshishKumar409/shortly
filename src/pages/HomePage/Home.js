import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne} from './Data'
import { ShortCode } from '../../components'
import FooterContainer from './FooterContainer'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />  
      <ShortCode/>
      <FooterContainer/>
    </>
  )
}

export default Home
