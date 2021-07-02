import styled from 'styled-components'
import desktopImg from '../../images/bg-shorten-desktop.svg'


export const ApiSec = styled.div`
color:#fff;
padding:160px 0;

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
justify-content:space-evenly;
align-items:center;
height:70px;
width:800px;
padding:5px;
position:absolute;
top:-35px;

  


border:2px solid black;
@media screen and  (max-width:768px){
  flex-direction:column;
  height:70px;
  width:250px;
 
  
}
`

export const InputForm = styled.input`
width:500px;
height:30px;
margin-bottom:3px;
border-radius:5px;
/* flex:1; */
padding-left:50px;
@media screen and  (max-width:768px){
  flex-direction:column;
  height:30px;
  width:200px;
}
`