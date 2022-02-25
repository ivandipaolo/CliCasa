import React from 'react'
import { StyledBackground } from './StyledContent'
import background from "../../Public/backgrounds/ferran.png"
import background2 from "../../Public/backgrounds/ferran2.png"
import Image from 'next/image'
import { Sales } from '../Sales/Sales'
import { Advantages } from '../Advantages/Advantages'
import { Slogan } from '../Slogan/Slogan'
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
          objectPosition='0% 91%'
        />
        <div className='blankBackground' />
        <div className='blankBackground' />
      </StyledBackground>
        <Image
          // className='object-center object-cover pointer-events-none'
          src={background2}
          alt='Background2'
          layout='fill'
          objectFit='cover'
          objectPosition='0% 40rem'
        />
      <Sales/>
      <Advantages/>
      <Slogan/>
    </>
  )
}
