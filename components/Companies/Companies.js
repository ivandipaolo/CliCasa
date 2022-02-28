import Image from 'next/image'
import React from 'react'
import { StyledCompanies } from './_StyledCompanies'
import mapfre from '../../public/content/companies/mapfre.png'
import inmoseguros from '../../public/content/companies/inmoseguros.png'

export const Companies = () => {
    return (
        <StyledCompanies>
            <h1>Trabajamos con las mejores empresas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
                <Image
                    src={mapfre}
                    layout='fixed'
                />
                <Image
                    src={inmoseguros}
                    layout='fixed'
                />
            </div>
        </StyledCompanies>
    )
}
