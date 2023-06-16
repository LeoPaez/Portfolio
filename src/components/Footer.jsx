import React from 'react'
import styled from 'styled-components'
import WhiteLogo from "../assets/lp-logo-white-png.png"
import Linkedin from "../assets/social/linkedin.png"
import GitHub from "../assets/social/github.png"
import Wpp from "../assets/social/wpp.png"
import { useTranslation } from "react-i18next"

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 140px;
  background-color: #212529;
  gap: 20px;
`
const FooterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  :last-child {
    gap: 20px;
  }
`
const FooterLogo = styled.img`
  width: 40px;
`
const FooterRights = styled.p`
  @media (max-width: 400px){
    font-size: 14px;
  }
`
const Border = styled.div`
  border-left: 1px solid #495057;
  height: 26px;
`
const Social = styled.a`
  cursor: pointer;
`
const SocialLogo = styled.img`
  width: 28px;
  transition: all 0.3s ease 0s;
  :hover {
    opacity: 0.8;
  }
`

const Footer = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Cont>
        <FooterCont>
          <a href="/">
            <FooterLogo src={WhiteLogo} alt="lp logo white" />
          </a>
          <Border />
          <FooterRights>&copy;2023 {t("footer.rights")}</FooterRights>
        </FooterCont>
        <FooterCont>
          <Social href="https://www.linkedin.com/in/leonel-paez/" target="_blank">
            <SocialLogo src={Linkedin} alt="linkedin" />
          </Social>
          <Social href="https://github.com/LeoPaez" target="_blank">
            <SocialLogo src={GitHub} alt="github" />
          </Social>
          <Social href="https://walink.co/9e973f" target="_blank">
            <SocialLogo src={Wpp} alt="whatsapp" />
          </Social>
        </FooterCont>
      </Cont>
    </>
  )
}

export default Footer