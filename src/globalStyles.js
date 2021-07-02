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
width:100%;
height:100%;
max-width:1400px;
margin-right:auto;
margin-left:auto;
margin-bottom:0;
padding-right:50px;
padding-left:50px;
padding-bottom:0;


@media screen and (max-width:991px){
  padding-right:30px;
  padding-left:30px;
  text-align:left;
}
`

export const Button = styled.button`
border-radius:${({radius})=>(radius?radius:'20px')};
border:none;

outline:none;
cursor:pointer;
width:${({width})=>(width?width:'100%')};
padding:10px;
background-color:#2acfcf;
color:white;

@media screen and (max-width:960px){
width:${({width})=>(width?width:'50%')};

}

&:hover{
  transition:all 0.3s ease-out;
 background-color:white;
 color:#2acfcf;
}
`



export default GlobalStyle