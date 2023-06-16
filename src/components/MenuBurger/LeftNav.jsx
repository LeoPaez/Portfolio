import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  li {
    padding: 18px 20px;
    border-bottom: 1px solid #6c757d;
    width: auto;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :hover {
      color: #CED4DA;
    }
    :first-of-type {
      margin-top: 10px;
    }
  }
  @media (max-width: 800px) {
    display: block;
    flex-flow: column nowrap;
    background-color: #495057;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open}) => {
  const [t] = useTranslation("global")

  return (
    <Ul open={open}>
      <a href="#nav">
        <li>{t("nav.home")}</li>
      </a>
      <a href="#about">
        <li>{t("nav.about")}</li>
      </a>
      <a href="#projects">
        <li>Portfolio</li>
      </a>
      <a href="#contact">
        <li>{t("nav.contact")}</li>
      </a>
      <a href="https://www.linkedin.com/in/leonel-paez/" target="_blank">
        <li>LinkedIn</li>
      </a>
      <a href="https://github.com/LeoPaez" target="_blank">
        <li>GitHub</li>
      </a>
      <a href="https://walink.co/9e973f" target="_blank">
        <li>WhatsApp</li>
      </a>
    </Ul>
  )
}

export default LeftNav