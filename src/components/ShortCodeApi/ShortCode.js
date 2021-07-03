import React,{useState,useEffect} from 'react'
import { 
  ApiSec,
  Box,InputForm,
  ButtonElement
  ,TextBoxContainer,
  TextBox,
  TextStaisticsContainer,
  TextPara,
  TextHeader,
  Cards,
  CardContainer,
  IconRound,
  TextParaCard,
  TextHeaderCard,
  Stick ,
  BoostContainer

} from './ShortCode.elements'
import { Container } from '../../globalStyles'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import brandRec from '../../images/icon-brand-recognition.svg'
import detailRec from '../../images/icon-detailed-records.svg'
import custom from '../../images/icon-fully-customizable.svg'


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

            <TextStaisticsContainer>
               <TextHeader color="black">Advanced Statistics</TextHeader>
               <TextPara>Track how your links are performing across the web with our powerful advanced statistics dashboard</TextPara>
            </TextStaisticsContainer>

            <Cards>
              <CardContainer value={"flex-start"}>
               <IconRound image={brandRec}/>
                <TextHeaderCard>Brand recognition</TextHeaderCard>
                <TextParaCard>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</TextParaCard>
              </CardContainer>
              <Stick/>
              <CardContainer value={"center"}>
               <IconRound image={detailRec}/>
                <TextHeaderCard>Detailed Records</TextHeaderCard>
                <TextParaCard>Gain insights in who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</TextParaCard>
              </CardContainer>
              <Stick/>
              <CardContainer value={"flex-end"}>
               <IconRound image={custom}/>
                <TextHeaderCard>Fully Customizable</TextHeaderCard>
                <TextParaCard>Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.</TextParaCard>
              </CardContainer>
            </Cards>
            
       </Container>
       <BoostContainer>
              <TextHeader>Boost your links today</TextHeader>
              <ButtonElement value={"180px"} radius={"20px"}> Get Started</ButtonElement>
            </BoostContainer>
     </ApiSec> 
    </>
  )
}

export default ShortCode
