import React from 'react'
import { Container,Wrapper,Row,Column,Link,Title,Icon,IconContainer } from './Footer.elemnets'

export default function Footer({children,...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Footer.Wrapper = function({children,...restProps}){
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function({children,...restProps}){
  return <Row {...restProps}>{children}</Row>
}
Footer.Column = function({children,...restProps}){
  return <Column {...restProps}>{children}</Column>
}
Footer.Link = function({children,...restProps}){
  return <Link {...restProps}>{children}</Link>
}
Footer.Title = function({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}
Footer.Icon = function({children,...restProps}){
  return <Icon {...restProps}/>
}
Footer.IconContainer = function({children,...restProps}){
  return <IconContainer {...restProps}>{children}</IconContainer>
}


