import React from 'react'
import { useTranslation } from "react-i18next"
import styled, { keyframes } from 'styled-components'
import HeroDraw from "../assets/draw-header.svg"
import ArrowRight from "../assets/icons/arrow-right.png"

const showup = keyframes`
  0% {opacity:0;}
  20% {opacity:1;}
  80% {opacity:1;}
  100% {opacity:1;}
`
const slidein = keyframes`
  0% { margin-left:-800px; opacity: 0; }
  20% { margin-left:-800px; }
  90% { margin-left:-0px; }
  100% { margin-left:-0px; }
`
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 140px;
  width: 50%;
  @media (max-width: 1500px){
    width: 60%;
  }
  @media (max-width: 1300px){
    width: 70%;
  }
  @media (max-width: 1000px){
    width: 80%;
  }
  @media (max-width: 800px){
    flex-direction: column;
    gap: 60px;
    padding: 80px 0 100px;
  }
  @media (max-width: 600px){
    width: 85%;
  }
`
const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 45%;
  :last-of-type {
    align-items: center;

  }
  @media (max-width: 1100px){
    width: 48%;
  }
  @media (max-width: 900px){
    width: 50%;
  }
  @media (max-width: 800px){
    width: 100%;
  }
`
const HeroBackGround = styled.div`
  width: 300px;
  height: 300px;
  filter: blur(calc(250px / 5));
  background: #1F1C2C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #928DAB, #1F1C2C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #928DAB, #1F1C2C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  animation: ${rotate} 30s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: absolute;
  @media (max-width: 800px){
    width: 260px;
    height: 260px;
  }
`
const HeroImg = styled.img`
  z-index: 10;
  width: 400px;
  @media (max-width: 1300px){
    width: 380px;
  }
  @media (max-width: 1200px){
    width: 360px;
  }
  @media (max-width: 1100px){
    width: 340px;
  }
  @media (max-width: 900px){
    width: 320px;
  }
  @media (max-width: 800px){
    width: 380px;
  }
  @media (max-width: 500px){
    width: 340px;
  }
  @media (max-width: 400px){
    width: 320px;
  }
`
const HeroTitleCont = styled.div`
  display: flex;
  gap: 8px;
  overflow: hidden;
`
const HeroTitleSpan = styled.span`
  color: #faf9f8;
`
const HeroTitle = styled.h1`
  color: #dee2e6;
  margin-bottom: 6px;
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
  :first-of-type {
    animation: ${showup} 10s infinite;
    animation-iteration-count: 1;
  }
  :last-of-type ${HeroTitleSpan} {
    animation: ${slidein} 2.4s infinite;
    animation-iteration-count: 1;
  }
  @media (max-width: 1300px){
    font-size: 28px;
  }
  @media (max-width: 900px){
    font-size: 26px;
  }
  @media (max-width: 800px){
    font-size: 30px;
  }
  @media (max-width: 600px){
    font-size: 28px;
  }
  @media (max-width: 400px){
    font-size: 26px;
  }
`

const HeroSubTitle = styled.h2`
  margin-bottom: 20px;
  color: #ced4da;
  @media (max-width: 1300px){
    font-size: 21px;
  }
  @media (max-width: 900px){
    font-size: 20px;
  }
  @media (max-width: 800px){
    font-size: 21px;
  }
`
const HeroInfo = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 22px;
  letter-spacing: 0.4px;
  width: 100%;
  @media (max-width: 1300px){
    font-size: 16px;
  }
`
const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
`
const HeroButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  width: 140px;
  background-color: #FF9100;
  color: #f8f9fa;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  :hover {
    background-color: #FF8500;
  }
  @media (max-width: 500px){
    width: 120px;
  }
`
const HeroButtonCV = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 4px;
  padding: 10px 0;
  width: 140px;
  background-color: transparent;
  color: #f8f9fa;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 2px solid #FF9100;
  :hover {
    background-color: #FF8500;
    border: 2px solid #FF8500;
  }
  @media (max-width: 500px){
    width: 120px;
  }
`
const HeroButtonCVIcon = styled.img`
  width: 15px;
`

const Hero = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <HeroCont>
          <HeroItem>
            <HeroTitleCont>
              <HeroTitle>
                {t("header.title")}
              </HeroTitle>
              <HeroTitle>
                <HeroTitleSpan> Leonel Paez</HeroTitleSpan>
              </HeroTitle>
            </HeroTitleCont>
            <HeroSubTitle>Front End Developer</HeroSubTitle>
            <HeroInfo>
              {t("header.info")}
            </HeroInfo>
            <HeroButtons>
              <a href="#contact">
                <HeroButton>{t("header.hireMeButton")}</HeroButton>
              </a>
              <a href="https://drive.google.com/file/d/1kPyJGFlNaq3_wnxgKyHrE4xSAZ40KFlv/view?usp=sharing" target="_blank">
                <HeroButtonCV>
                  CV
                  <HeroButtonCVIcon src={ArrowRight} alt="arrow right" />
                </HeroButtonCV>
              </a>
            </HeroButtons>
          </HeroItem>
          <HeroItem>
            <HeroBackGround />
            <HeroImg src={HeroDraw} alt="hero draw" />
          </HeroItem>
        </HeroCont>
      </Flex>
    </>
  )
}

export default Hero