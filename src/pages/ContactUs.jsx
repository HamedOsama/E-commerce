import { MailOutline, Phone } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';
import Container from '../UI/Containers/Container'
import ContactItem from '../UI/Footer/ContactItem';
import Title from '../UI/Title'
import Button from '../UI/Button';


const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  margin: 5rem 0;
  & .up{
    width: calc(50% - 1rem);
    margin: 0 1rem 0 0;
  }
  & .message {
    width: 97%;
    margin: 2rem 0;
  }
  & .message .MuiInputBase-input{
    height: 100px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
`
const ContactUs = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <InfoContainer>
          <Title style={{ fontSize: 50, margin: '0 0 2rem' }}>Contact Us</Title>
          <Title>Get in touch</Title>
          <ContactItem style={{ fontWeight: 600 }}>
            <Phone />
            +201 012 345 678
          </ContactItem>
          <ContactItem style={{ fontWeight: 600 }}>
            <MailOutline />
            hamedosama19@gmail.com
          </ContactItem>
          <SocialMedia />
        </InfoContainer>
        <InfoContainer>
          <TextField id="name" label="Name" variant="outlined" className='up' required />
          <TextField id="email" label="Email" variant="outlined" className='up' required />
          <Textarea
            disabled={false}
            minRows={6}
            placeholder="Message"
            id="Message"
            variant="outlined"
            className="message"
          />
          <Button>Send</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default ContactUs