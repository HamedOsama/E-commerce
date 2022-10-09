import React from 'react'
import { useInView } from 'react-intersection-observer'
import { CountUp } from 'use-count-up'

import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Container from '../UI/Containers/Container'
import Title from '../UI/Title'

const Wrapper = styled.div`
overflow: hidden;
`
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainImage = styled.img`
  width : 100vw;
  @media (max-width : 576px) {
    height: 240px;
    object-fit: cover;
  }
`

const SomeInfo = styled.div`
  margin: 3rem 20%;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color : #505050;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    bottom: calc(-2rem);
    left: calc(50% - 87.5px);
    width: 175px;
    height: 3px;
    background-color: #505050;
  }
  @media (max-width : 567px) {
    margin: 3rem 10%;
  }
`
const OurStatistics = styled.div`
    background-image: url(http://corporate.defacto.com.tr/assets/img/parallax.jpg);
    height: 280px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 4rem 0 2rem;
    display: flex ;
    align-items: center;
    justify-content: center;
    /* gap: 1rem; */
`
const Statistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  color: #fff;
`
const Count = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
`;
const StatisticTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;

`;
const Info = styled.div`
  padding: 1.25rem;
  margin: 0 22.5%;
  @media (max-width : 876px) {
    margin: 0 15%;
  }
  @media (max-width : 678px) {
    margin: 0 10%;
  }
  @media (max-width : 578px) {
    margin: 0;
  }
`

const Paragraph = styled.p`
  font-size : 1.25rem;
  line-height: 1.75rem;
  color : #9f9f9f;
  margin: 0 0 1rem;
`
const Image = styled.img`
  margin : 1rem 0;
  width: 100%;
`

const animationDuration = 2
const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  console.log(inView)
  return (
    <Container >
      <Navbar />
      <Wrapper>
        <Main>
          <MainImage src='http://corporate.defacto.com.tr/assets/img/bg/hakkimizda.jpg' />
          <Title style={{ position: 'absolute', color: '#fff', fontSize: '2rem', letterSpacing: '4px' }}>ABOUT US</Title>
        </Main>
        <SomeInfo>
          As E-Commerce, we started an excitement journey in 2022. In this journey we set off to bring a fresh new perspective to Egyptian fashion and bring together our brand new, quality and unique designs with consumers at four corners of the World, we put our signature under very important Works and achievements.
        </SomeInfo>
        <OurStatistics >
          <Statistic ref={ref}>
            <Count>
              {inView && <CountUp isCounting start={0} end={30} duration={animationDuration} />}
            </Count>
            <StatisticTitle>Countries</StatisticTitle>
          </Statistic>
          <Statistic>
            <Count>
              {inView && <CountUp isCounting start={0} end={500} duration={animationDuration} />}
              +
            </Count>
            <StatisticTitle>Stores</StatisticTitle>
          </Statistic>
          <Statistic>
            <Count>
              {inView && <CountUp isCounting start={0} end={25000} duration={animationDuration} />}
              +
            </Count>
            <StatisticTitle>Employees</StatisticTitle>
          </Statistic>
        </OurStatistics>
        <Info>
          <Paragraph>
            Most important of all; we were born in Egypt and realized our purpose to become a global brand. We have adopted innovation and renewal as a corporate culture. In this line, we have created sub-brands aimed to needs of everyone. Today, we touch lives of our consumers in more than 100 countries at more than 500 stores with our E-Commerce
          </Paragraph>
          <Paragraph>
            We made room for E-Commerce brand which we placed as the founder of “Accessible Fashion” concept and Pioneer of innovation, in wardrobes in everyone. With our experienced, innovative design team and important cooperation, we offer range of products which will allow our consumers to feel the change with quality product and affordable prices and we work hard to ensure that this mission is sustainable.
          </Paragraph>
          <Image src="http://corporate.defacto.com.tr/assets/img/hakkimizda.jpg" alt="about-us" />
          <Paragraph>
            We dedicate ourselves to delivering a fashion concept where everyone feels comfortable and well together with our more than 25,000+ happy employees.
          </Paragraph>
          <Paragraph>
            While running in the pace of daily life, while spending the sweetest days of the holiday with your loved ones, while you sail to brand new beginnings for the most beautiful days you have dreamed of, every time you are refreshed and have fun, we will be with you.
          </Paragraph>
          <Paragraph>
            Now is the time to reflect, embrace, celebrate and announce the feeling of renewal within you!
          </Paragraph>
          <Paragraph>
            We invite everyone to say “Renew. Be Merry. Continue!”
          </Paragraph>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default About