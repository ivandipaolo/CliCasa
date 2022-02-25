import React from 'react'
import { StyledStepInfo } from './StyledStepInfo'

export const StepInfo = ({ info }) => {
    const { id, title, description } = info;
    return (
        <StyledStepInfo>
            <h5>{id}</h5>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </StyledStepInfo>
    )
}
