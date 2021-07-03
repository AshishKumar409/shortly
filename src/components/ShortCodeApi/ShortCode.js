import React,{useState} from 'react'
import { ApiSec,Box,InputForm,ButtonElement,TextBoxContainer,TextBox } from './ShortCode.elements'
import { Container } from '../../globalStyles'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShortCode = () => {
  const [array,setArray] = useState([]) 
  
  
  const [input,setInput] = useState("") 
   let obj = {}
  const handleClick=()=>{
   if(input===""){
     return
   }
   obj.name = input
   obj.length = input.length 
   setArray([...array,obj])
  }

  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  const handleCopy=(e)=>{
    e.target.innerHTML = "Copied"
    e.target.style.background="black"
   
  }
  return (
    <>
     <ApiSec>
       <Container>
        <Box>
         <InputForm placeholder="shorten your link!" onChange={handleChange} value={input}/>
          <ButtonElement onClick={handleClick}>Shorten it!</ButtonElement>
        </Box>
        {
            array.map((object)=>{
              return <>
             <TextBoxContainer>
               <TextBox>{object.name}</TextBox>
               <TextBox green={true}>{object.length}</TextBox>
               <CopyToClipboard text={object.name} onCopy={() =>alert("copied")}>
               <ButtonElement onClick={handleCopy}>Copy</ButtonElement>
               </CopyToClipboard>
             </TextBoxContainer>
              </>
            })
          }
       </Container>
     </ApiSec> 
    </>
  )
}

export default ShortCode
