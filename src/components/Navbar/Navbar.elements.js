import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
/* border:2px solid ; */
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
/* position:sticky; */
top:0;
z-index:998;
`
export const NavbarContainer = styled(Container)`
  display:flex;
  
  justify-content:space-between;
  height:80px;
  
  /* border:2px solid; */
  ${Container}
  
`
export const NavTitle = styled(Link)`
display:flex;
/* border:2px solid; */
color:black;
justify-content:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
align-items:center;

@media screen and (max-width:960px){
/* margin-left:0px; */
 
}
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
display: block;
position:absolute;
padding:2px;
top:0;
right:0;
transform:translate(-100%,60%);
font-size:1.8rem;
cursor:pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
/* border:2px solid; */
justify-content:flex-start;
align-items:center;
list-style:none;
text-align:center;


@media screen and (max-width:960px){
  display:flex;
 
  flex-direction:column;
  width:80%;
  /* height:55vh; */
  text-align:center;
  border-radius:15px;
  color:white;
  background-color:#3b3054;
  position:absolute;
  top:80px;
  left:${({click})=>(click?'10vw':'-101%')};
  opacity:1;
  transition:all 0.5s ease;

}
`
export const NavItem = styled.li`


border-bottom:2px solid transparent;



&:hover{
  border-bottom:2px solid ${({color})=>(color?color:'#bfbfbf')};
 
}

@media screen and (max-width:960px){
  /* border:2px solid; */
  width:100%;
  height:10vh;
  padding-bottom:0;
  

  &:hover{
    border:none;
  }
}
`
export const NavLinks = styled(Link)`
 color:#bfbfbf;
 /* border:2px solid; */
 display:flex;
 font-size:18px;
 justify-content:center;
 align-items:center;
 text-decoration:none;
 padding:0.5rem 1em;
 height:100%;

 @media screen and (max-width:960px){
   color:white;
   text-align:center;
   padding:1rem;
   width:100%;
   display:table;

   &:hover{
     /* color: #000; */
     transition:all 0.3s ease;
   }
 }
`

export const Break = styled.div`
width:40vw;
@media screen and (max-width:960px){
background-color:#9e9aa7;
height:1px;
/* margin:auto; */
margin-top:3px;
margin-bottom:0px;

width:50vw;
}

`

