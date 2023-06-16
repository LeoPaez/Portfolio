import React, { useLayoutEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import styled from 'styled-components'

const Cont = styled(motion.div)`
  position: relative;
  z-index: ${props => props.zIndex || 0};
`
const boxVariant = {
  visible: ({ duration }) => ({ opacity: 1, scale: 1, transition: { duration } }),
  hidden: { opacity: 0, scale: 0.8 }
};

export const Anim = ({ children, zIndex, duration }) => {
  return (
    <>
      <Cont
        variants={boxVariant}
        zIndex={zIndex}
        custom={{ duration: duration }}
        initial="hidden"
        animate="visible"
      >
        { children }
      </Cont>
    </>
  )
}

export const ScrollAnim = ({ children, duration }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useLayoutEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  return (
    <>
      <Cont
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        custom={{ duration: duration }}
      >
        { children }
      </Cont>
    </>
  )
}
