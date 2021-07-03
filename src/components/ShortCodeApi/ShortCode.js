import React,{useState,useEffect} from 'react'
import { ApiSec,Box,InputForm,ButtonElement,TextBoxContainer,TextBox } from './ShortCode.elements'
import { Container } from '../../globalStyles'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShortCode = () => {
  const [array,setArray] = useState([]) 
  
  
  const [input,setInput] = useState("") 
  let obj = {}
  

const handleClick=(e)=>{
   if(input===""){
     alert("Enter your Url!!")
     return
   }
   async function shortLink(input){
    alert("wait till we shorten the URL.")
    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
    let data = await response.json()
    obj.fullLink = await data.result.original_link
    obj.shortLink = await data.result.short_link
    obj.shortLink2 = await data.result.short_link2
    obj.id = await data.result.code
    setArray([...array,obj])
    

    }
    shortLink(input) 
    setInput("")    
  }

  const handleChange=(e)=>{
    setInput(e.target.value)
    
  }
 
  useEffect(()=>{
  
  })
  
   
    

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
        {array.map((object)=>{
              return <>{object.id ?
             <TextBoxContainer key={object.id}>
               <TextBox >{object.fullLink?object.fullLink:null}</TextBox>
               <TextBox  green={true}>{object.shortLink?object.shortLink:null}</TextBox>
               <CopyToClipboard text={object.shortLink?object.shortLink:null} onCopy={() => true}>
               <ButtonElement onClick={handleCopy}>Copy</ButtonElement>
               </CopyToClipboard>
             </TextBoxContainer>
            :<TextBox>Wait</TextBox>}</>
            })}
       </Container>
     </ApiSec> 
    </>
  )
}

export default ShortCode
