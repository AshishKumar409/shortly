import React from 'react'
import { ApiSec,Box,InputForm } from './ShortCode.elements'
import { Container } from '../../globalStyles'
import { Button } from '../../globalStyles'

const ShortCode = () => {
  return (
    <>
     <ApiSec>
       <Container>
        <Box>
         <InputForm/>
           
          <Button fontSize={"10px"} width={'80px'} radius={"5px"}>Shorten it!</Button>
        </Box>
       </Container>
     </ApiSec> 
    </>
  )
}

export default ShortCode
