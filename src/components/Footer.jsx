import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '../UI/Footer/Container'
import Left from '../UI/Footer/Left'
import {Middle,List,ListItem} from '../UI/Footer/Middle'
import Right from '../UI/Footer/Right'
import Logo from '../UI/Logo'
import SocialIcon from '../UI/SocialIcon';
import IconsContainer from '../UI/Footer/IconsContainer';
import Description from '../UI/Footer/Description';
import { MailOutline, Phone } from '@mui/icons-material';
import ContactItem from '../UI/Footer/ContactItem';
import Title from '../UI/Title';

function Footer() {
  return (
    <Container>
      <Left>
        <Logo style={{textAlign : 'left'}}>E-Commerce</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vero in asperiores, iste doloribus ipsa possimus tenetur ex unde sunt cum eum impedit rem nostrum iure, omnis voluptatum quia natus quisquam recusandae ipsum quam? Aperiam pariatur aliquid earum iusto quaerat repellat sit qui eum unde quibusdam, vel reprehenderit dolorem ipsa.
        </Description>
        <IconsContainer>
          <SocialIcon>
            <FacebookRoundedIcon/>
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon>
            <LinkedInIcon/>
          </SocialIcon>
          <SocialIcon>
            <GitHubIcon/>
          </SocialIcon>
        </IconsContainer>
      </Left>
      <Middle>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone/>
          +201 012 345 678
        </ContactItem>
        <ContactItem>
          <MailOutline />
          hamedosama19@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer