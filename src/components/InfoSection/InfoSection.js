import React from 'react'
import { Container } from '../../globalStyles'
// import { homeObjOne } from '../../pages/HomePage/Data'
import {Button} from '../../globalStyles'
import {InfoSec,InfoRow,InfoColumn,TextWrapper,Heading,Subtitle,ImgWrapper,Img} from './InfoSection.elements'
// import img from '../../images/illustration-working.svg'


const InfoSection=({Gray,imgStart,headLine,description,alt,img,display})=>{
  return <>
  <InfoSec Gray={Gray}>
    <Container>
      <InfoRow imgStart={imgStart}>
        <InfoColumn>
          <ImgWrapper>
           {display ?<Img src={img?img:null} alt={alt}/>:null}
         </ImgWrapper>
        </InfoColumn>
        <InfoColumn>
          <TextWrapper>
            <Heading>{headLine}</Heading>
            <Subtitle>{description}</Subtitle>
            { display ? <Button width={'100px'}>Get Started</Button>:null}
          </TextWrapper>
        </InfoColumn>
        
      </InfoRow>   
    </Container>
  </InfoSec>
  </>
}

export default InfoSection