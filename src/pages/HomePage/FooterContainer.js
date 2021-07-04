import React from 'react'
import { Footer } from '../../components'
import fb from '../../images/icon-facebook.svg'
import insta from '../../images/icon-instagram.svg'
import pst from '../../images/icon-pinterest.svg'
import twitt from '../../images/icon-twitter.svg'
function FooterContainer() {
  return (
    <Footer>
      
      <Footer.Wrapper>
        
        <Footer.Row>
          <Footer.Column>
            <Footer.Title  size="24px">Shortly</Footer.Title>
          </Footer.Column>
          
          <Footer.Column>
            <Footer.Title>Features</Footer.Title>
            <Footer.Link href="#!">Link Shortening</Footer.Link>
            <Footer.Link href="#!">Branded Links</Footer.Link>
            <Footer.Link href="#!">Analytics</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Resources</Footer.Title>
            <Footer.Link href="#!">Blog</Footer.Link>
            <Footer.Link href="#!">Developers</Footer.Link>
            <Footer.Link href="#!">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Company</Footer.Title>
            <Footer.Link href="#!">About</Footer.Link>
            <Footer.Link href="#!">Our Team</Footer.Link>
            <Footer.Link href="#!">Careers</Footer.Link>
            <Footer.Link href="#!">Contact</Footer.Link>
          </Footer.Column>
          <Footer.IconContainer>
           <Footer.Icon icon={fb}/>
           <Footer.Icon icon={twitt}/>
           <Footer.Icon icon={pst}/>
           <Footer.Icon icon={insta}/>
          </Footer.IconContainer> 
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}

export default FooterContainer
