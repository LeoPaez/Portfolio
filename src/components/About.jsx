import React from 'react'
import styled from 'styled-components'
import HTML from "../assets/langs/html.svg"
import CSS from "../assets/langs/css.svg"
import JS from "../assets/langs/javascript.svg"
import ReactIcon from "../assets/langs/react.png"
import Chakra from "../assets/langs/chakra-ui.png"
import Styled from "../assets/langs/styled.png"
import ReactRouter from "../assets/langs/react-router.png"
import Tailwind from "../assets/langs/tailwind.png"
import Material from "../assets/langs/material-ui.png"
import Redux from "../assets/langs/redux.svg"
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useTranslation } from "react-i18next"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
`
const AboutCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding: 50px 0 90px;
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
  @media (max-width: 900px){
    height: fit-content;
    padding: 30px 0 0 0;
  }

`
const AboutItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  @media (max-width: 1600px){
    gap: 40px;
  }
  @media (max-width: 900px){
    flex-direction: column;
    gap: 30px;
    padding: 0 0 50px;
  }
`
const AboutItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 430px;
  :last-of-type {
    border: 2px solid #495057;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    background-color: #343a40;
  }
  @media (max-width: 900px){
    width: 100%;
    :first-of-type {
      align-items: flex-start;
    }
  }
`
const AboutTitle = styled.h3`
  font-size: 26px;
  border-bottom: 1px solid #343a40;
  padding: 0 50px 8px;
  margin: 0 auto 40px;
  @media (max-width: 900px){
    margin: 0 auto 30px;
  }
`
const AboutInfo = styled.p`
  font-size: 17px;
  display: flex;
  margin-bottom: 40px;
  color: #DEE2E6;
  line-height: 22px;
  letter-spacing: 0.4px;
  @media (max-width: 1600px){
    font-size: 16px;
  }
  @media (max-width: 1100px){
    font-size: 15px;
  }
  @media (max-width: 600px){
    width: 90%;
  }
`
const ExpCont = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 1100px){
    gap: 20px;
  }
  @media (max-width: 900px){
    margin: 0 auto;
  }
`
const Exp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ExpNum = styled.p`
  color: #FFAA00;
  font-size: 20px;
  @media (max-width: 1600px){
    font-size: 19px;
  }
  @media (max-width: 1100px){
    font-size: 18px;
  }
`
const ExpInfo = styled.p`
  text-align: center;
  color: #ADB5BD;
  @media (max-width: 1600px){
    font-size: 15px;
  }
  @media (max-width: 1100px){
    font-size: 14px;
  }
`
const SkillsTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
  color: #ced4da;
  border-bottom: 1px solid #495057;
  padding: 0 20px 4px;
`
const SkillsCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 260px;
  gap: 20px;
  @media (max-width: 1100px){
    width: 220px;
  }
  @media (max-width: 900px){
    width: 320px;
    gap: 24px;
  }
  @media (max-width: 700px){
    width: 300px;
    gap: 16px;
  }
  @media (max-width: 600px){
    gap: 20px;
  }
  @media (max-width: 400px){
    width: 240px;
  }
`
const SkillsLogo = styled.img`
  min-width: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: ${props => props.borderRadius};
  @media (max-width: 900px){
    min-width: 44px;
    max-width: 44px;
    max-height: 44px;
  }
  @media (max-width: 700px){
    min-width: 40px;
    max-width: 40px;
    max-height: 40px;
  }
`

const About = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <AboutCont id="about">
          <AboutTitle>{t("about.title")}</AboutTitle>
          <AboutItems>
            <AboutItem>
              <AboutInfo>{t("about.info")}</AboutInfo>
              <ExpCont>
                <Exp>
                  <ExpNum>+1</ExpNum>
                  <ExpInfo>{t("about.years")}</ExpInfo>
                </Exp>
                <Exp>
                  <ExpNum>+30</ExpNum>
                  <ExpInfo>{t("about.projects")}</ExpInfo>
                </Exp>
              </ExpCont>
            </AboutItem>
            <AboutItem>
              <SkillsTitle>Skills</SkillsTitle>
              <SkillsCont>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="HTML"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={HTML} alt="html" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="CSS"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={CSS} alt="css" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="JavaScript"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={JS} alt="javascript" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="React"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={ReactIcon} alt="react" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Redux"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={Redux} alt="redux" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="React Router"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={ReactRouter} alt="react router" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Tailwind"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={Tailwind} alt="tailwind" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Styled Components"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={Styled} alt="styled components" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Chakra UI"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={Chakra} borderRadius="50%" alt="chakra ui" />
                </a>
                <a 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Material UI"
                  data-tooltip-delay-show={100}
                >
                  <SkillsLogo src={Material} alt="material ui" />
                </a>
                <Tooltip id="my-tooltip" />
              </SkillsCont>
            </AboutItem>
          </AboutItems>
        </AboutCont>
      </Flex>
    </>
  )
}

export default About