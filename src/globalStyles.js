import styled,{createGlobalStyle} from 'styled-components' 

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
 
  font-family: 'Poppins', sans-serif;
}
`
export const Container = styled.div`
z-index:1;

height:100%;
max-width:1440px;
margin-right:auto;
margin-left:auto;
margin-bottom:0;
padding-right:50px;
padding-left:50px;



@media screen and (max-width:991px){
  padding-right:30px;
  padding-left:30px;
  text-align:center;
}
`

export const Button = styled.button`
border-radius:20px;
border:none;
font-size:12px;
outline:none;
cursor:pointer;
height:40px;
width:100px;
padding:3px;
background-color:#2acfcf;
color:white;



&:hover{
  transition:all 0.3s ease-out;
 background-color:white;
 color:#2acfcf;
}
`





export default GlobalStyle