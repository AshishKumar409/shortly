import styled from 'styled-components'


export const Container = styled.div`
  padding:40px 30px;
  background-color:#232127;
  color:white;
  /* border:2px solid; */

 
`
export const Wrapper = styled.div`
  display:flex;
  /* border:2px solid; */
  flex-direction:column;
  justify-content:center;
  max-width:1000px;
  margin: auto;
`
export const Row = styled.div`
display:flex;
/* border:2px solid; */
@media screen and (max-width:760px){
  flex-direction:column;
  align-content:flex-start;
}
`
export const Column = styled.div`
   /* border:2px solid; */
   display:flex;
   width:200px;
  flex-direction:column;
  text-align:left;
  margin:0 auto;
`
export const Title = styled.h4`
  font-size:${({size})=>size?size:"18px"};
  font-weight:bold;
  margin-right:${(value)=>value};
  margin-bottom:25px;
`
export const Link = styled.a`
   color:#fff;
  /* margin-bottom:200px; */
  font-family:sans-serif;
  margin-bottom:20px;
  font-size:14px;
  text-decoration:none; 
&:hover{
  color:#2acfcf;
  transition:200ms ease-in;
}
  
`

export const IconContainer=styled.div`
display:flex;
width:150px;
/* border:2px solid; */
justify-content:space-around;
@media screen and (max-width:760px){
width:50%;
}

`


export const Icon = styled.div`
background:url(${({icon})=>icon});
background-position:center;
border-radius:2px;

 background-color:#bfbfbf;
background-blend-mode:difference;
height:20px;
width:20px;
&:hover{
  background-color:#2acfcf;
  background-blend-mode:color-dodge;
  transition:200ms ease-in;
}

`