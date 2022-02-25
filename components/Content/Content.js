import React from 'react'
import { StyledBackground, StyledContent } from './StyledContent'
import background from "../../Public/backgrounds/ferran.png"
import Image from 'next/image'
import { Sales } from '../Sales/Sales'
import { Advantages } from '../Advantages/Advantages'
export const Content = () => {
  return (
    <>
      <StyledBackground>
        <Image
          // className='object-center object-cover pointer-events-none'
          src={background}
          alt='Background'
          layout='fill'
          objectFit='contain'
          objectPosition='10% 91%'
        />
        <div className='blankBackground' />
        <Image
          // className='object-center object-cover pointer-events-none'
          src={background}
          alt='Background'
          layout='fill'
          objectFit='contain'
          objectPosition='10% 91%'
        />
      </StyledBackground>
      <Sales/>
      <Advantages/>
    </>
  )
}
