import styled from 'styled-components'
import desktopImg from '../../images/bg-shorten-desktop.svg'
import MobImg from '../../images/bg-shorten-mobile.svg'
import desktopBoostImg from '../../images/bg-boost-desktop.svg'
import MobBoostImg from '../../images/bg-boost-mobile.svg'




export const ApiSec = styled.div`
color:#fff;
padding-top:120px;
padding-bottom:0px;
max-width:100%;

background:lightgray;
position: relative;
margin:auto;


`

export const Box = styled.div`
background:url(${desktopImg});
background-color: #3b3054;
background-repeat:repeat;
background-blend-mode: multiply;
display:flex;
border-radius:5px;
justify-content:space-between;
align-items:center;
height:100px;
width:50%;
padding:20px;
position:absolute;
top:-50px;
left:25%;

  



@media screen and  (max-width:768px){
  flex-direction:column;
  /* height:0px; */
  width:80%;
  background:url(${MobImg});
  background-color: #3b3054;
  background-blend-mode: multiply;
  align-content:space-evenly;
  padding:10px;
  left:10%;
 
  
}
`

export const InputForm = styled.input`
width:80%;
height:40px;
outline:none;
text-align:initial;
padding-left:5px;
border-radius:5px;
/* flex:1; */

@media screen and  (max-width:768px){
  flex-direction:column;
  padding-top:0;
  height:30px;
  width:80%;
  font-size:10px;
}
`

export const ButtonElement = styled.button`
 
 width:${({value})=>value?value:"18%"};
 height:40px;
 /* padding:2px; */
 border:none;
 color:white;
font-size:12px;
 background-color:#2acfcf;
 border-radius:${({radius})=>radius?radius:"6px"};
 @media screen and  (max-width:768px){
   width:${({value})=>value?value:"80%"};
   height:30px;
 }
 &:hover{
  transition:all 0.3s ease-out;
 background-color:white;
 color:#2acfcf;
}
`

export const TextBoxContainer = styled.div`
position:relative;
left:22%;
width:55%;
background-color:white;
margin-bottom:2px;
border-radius:5px;
display:flex;
padding:5px;
justify-content:space-around;
align-items:center;
 @media screen and  (max-width:768px){
 flex-direction:column;
  width:95%;
  left:5%
 }

`

export const TextBox = styled.span`
padding:1px;
font-size:10px;
text-align:initial;

color:${({green})=>green?"#2acfcf":'black'};
 
 @media screen and  (max-width:768px){
font-size:8px;
 }
`

export const TextStaisticsContainer = styled.div`
width:40%;
position: relative;
left:30%;
margin-top:80px;
padding-left:100px;
padding-right:100px;


text-align:center;
 @media screen and  (max-width:768px){
  width:100%; 
  left:2%;
  
  padding-left:10px;
  padding-right:10px;
 }
`

export const TextHeader = styled.h2`
color:${({color})=>color};
font-size:25px;
margin-bottom:5px;
`
export const TextPara = styled.h5`

color:gray;
margin-bottom:5px;
`

export const Cards = styled.div`
margin-top:100px;
display:flex;

/* border:2px solid black; */
height:300px;
justify-content:center;
align-items:center;
 @media screen and  (max-width:768px){
 flex-direction:column;
 height:700px;
 }
`
export const CardContainer = styled.div`
position: relative;
/* border:2px solid black; */
align-self:${({value})=>value};
background-color:white;
border-radius:5px;
padding:10px;
width:330px;
height:200px;
@media screen and  (max-width:768px){
  align-self:unset;
  
}
`
export const IconRound = styled.div`
position:absolute;
top:-30px;
left:20px;
background:url(${({image})=>image});
background-color:#3b3054;
background-size:25px;
background-position:center;
background-repeat:no-repeat;
background-blend-mode:color-dodge;
border-radius:50%;
height:60px;
width:60px;
@media screen and  (max-width:768px){
  left:135px;

}
`
export const TextHeaderCard = styled.h3`
color:black;
/* text-align:center; */
padding-top:40px;
padding-left:20px;
padding-right:20px;
margin-bottom:5px;
`
export const TextParaCard = styled.h5`
padding-left:20px;
padding-right:20px;
color:gray;
margin-bottom:5px;
`
export const Stick = styled.div`
height:5px;
width:25px;
background-color:#2acfcf;

 @media screen and  (max-width:768px){
 width:5px;
 height:50px;
 }
`

export const BoostContainer = styled.div`
margin-top:60px;
height:150px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:url(${desktopBoostImg});
background-color:#3b3054;

@media screen and  (max-width:768px){
background:url(${MobBoostImg});
background-color:#3b3054;
}
`