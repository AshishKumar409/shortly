import styled from 'styled-components'
import desktopImg from '../../images/bg-shorten-desktop.svg'



export const ApiSec = styled.div`
color:#fff;
padding:160px 0;
max-width:100%;

background:#bfbfbf;
position: relative;
margin:auto;


`

export const Box = styled.div`
background:url(${desktopImg});
background-color: #232127;
background-blend-mode: multiply;
display:flex;
border-radius:5px;
justify-content:space-between;
align-items:center;
height:90px;
width:50%;
padding:20px;
position:absolute;
top:-35px;
left:25%;

  



@media screen and  (max-width:768px){
  flex-direction:column;
  /* height:0px; */
  align-content:space-evenly;
  padding:10px;
 
 
  
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
 
 width:18%;
 height:40px;
 /* padding:2px; */
 border:none;
 color:white;
font-size:12px;
 background-color:#2acfcf;
 border-radius:5px;
 @media screen and  (max-width:768px){
   width:80%;
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
  width:80%;
  left:10%
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

