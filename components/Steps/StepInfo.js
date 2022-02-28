import React, { useEffect } from 'react'
import { StyledStepInfo } from './StyledStepInfo'
import group from '../../public/content/group.png'
import Image from 'next/image';

export const StepInfo = ({ info }) => {
    const { id, title, description } = info;
    const handleClick = (id) => {
        console.log('Image group.')
    }
    return (
        <StyledStepInfo onClick={() => handleClick(id)}>
            <h5>{id}</h5>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className='asset'>
                <Image
                    src={group}
                    alt="group image"
                    layout='responsive'
                    priority
                />
            </div>
        </StyledStepInfo>
    )
}
