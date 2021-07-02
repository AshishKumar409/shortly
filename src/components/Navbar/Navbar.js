import React,{useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Button} from '../../globalStyles'
import { IconContext } from 'react-icons/lib'
import { Nav ,NavbarContainer,NavTitle,MobileIcon,NavMenu,NavLinks,NavItem,Break} from './Navbar.elements'


const Navbar = () => {
  const [click,setClick] = useState(false)
  const handleClick=()=>{ setClick(!click)}
  return (
    <>
    <IconContext.Provider value={{color:"#bfbfbf"}}>
      <Nav>
       <NavbarContainer>
         <NavTitle to="/">
           Shortly
         </NavTitle>
         <MobileIcon onClick={handleClick}>
           <FaBars/>
         </MobileIcon>

        <NavMenu onClick={handleClick} click={click}>
          
            <NavItem>
             <NavLinks to="/">Features</NavLinks> 
            </NavItem>
            <NavItem>
             <NavLinks to="/">Pricing</NavLinks> 
            </NavItem>
            <NavItem>
             <NavLinks to="/">Resources</NavLinks> 
            </NavItem>

            <Break/>
            <NavItem>
             <NavLinks to="/">Login</NavLinks> 
            </NavItem>
            <NavItem color={"none"}>
             <Button to="/">Sign Up</Button> 
            </NavItem>
      
        </NavMenu>
        
       </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
