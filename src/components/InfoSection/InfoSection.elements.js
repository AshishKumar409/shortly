import styled from 'styled-components'



export const InfoSec = styled.div`
color:#fff;
padding:160px 0;
background:${({Gray})=>(Gray?"#bfbfbf":"white")}
`

export const InfoRow=styled.div`
display:flex;

/* border:2px solid black; */
overflow:hidden;
width:90vw;
flex-wrap:wrap;
align-items:center;
flex-direction:${({imgStart})=>(imgStart?'row-reverse':'row')}
`

export const InfoColumn = styled.div`
overflow:hidden;
display:flex;
margin-top:0;
/* border:2px solid black; */
justify-content:space-evenly;
margin-bottom:15px;
padding-right:15px;
padding-left:15px;
flex:1;
max-width:50%;
flex-basis:50%;

@media screen and  (max-width:768px){
  max-width:100%;
  flex-basis:100%;
  display:flex;
  justify-content:center;

}
`

export const TextWrapper = styled.div`

max-width:540px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width:760px){
  padding-bottom:65px;
}
`

export const TopLine = styled.div`
font-size:18px;
line-height:16px;
letter-spacing:1.4px;
margin-bottom:16px;
`

export const Heading = styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
color:#3b3054;
`

export const Subtitle=styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:#bfbfbf;
`

export const ImgWrapper = styled.div`

max-width:600px;
flex:3;
display:flex;
justify-content:flex-end;
max-height:500px;
`

export const Img = styled.img`
padding-right:0;
border:2px solid black;
border:0;
margin-right:0;
max-width:100%;
vertical-align:middle;
display:inline-block;
max-height:500px;
`