import React from 'react'
import arrow from "../../public/content/arrow.png"
import house from "../../public/content/house.png"
import play from "../../public/content/play.png"
import Image from 'next/image'
import { StyledSales } from './StyledSales'
export const Sales = () => {
    return (
        <StyledSales className='vende'>
            <h2>Vende tu casa <br /> en un <span>clic</span></h2>
            {/* <Image
            src={arrow}
            alt='arrow'
          /> */}
            <div className='venderBox'>
                <Image
                    src={house}
                    alt='house'
                />
                <input type='text' placeholder='Introduce la dirección de tu casa o piso' />
                <button type='submit'>VENDER MI INMUEBLE</button>
            </div>
            <p>
                Compramos tu casa directamente <br />
                sin complicaciones ni preocupaciones.
            </p>
            <button>
                <p>VER VÍDEO</p>
                <Image
                    src={play}
                    alt='play'
                />
            </button>
        </StyledSales>
    )
}
