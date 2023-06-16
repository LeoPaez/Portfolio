import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  /* position: fixed; */
  top: 15px;
  left: 20px;
  display: none;
  padding: 4px 0 0 4px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  visibility: ${({ open }) => open ? "hidden" : "visible"};
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#adb5bd' : '#dee2e6'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
      transition-duration: 300ms
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
      transition-duration: 400ms
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
      transition-duration: 500ms
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  const divRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!divRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpen]);
  
  return (
    <>
      <LeftNav open={open} className="left-nav"/>
      <StyledBurger ref={divRef} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default Burger