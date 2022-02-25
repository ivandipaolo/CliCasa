import React, { useEffect, useState } from 'react'
import { StyledSteps } from './StyledSteps'
import Axios from "axios";
import { StepInfo } from './StepInfo';

export const Steps = () => {
    const [infos, setInfos] = useState([])
    const fetchInfos = async () => {
        const { data } = await Axios.get(
            "http://localhost:8080/info/getAll"
        );
        setTimeout(() => {
            setInfos(data)
        }, 1000);
    }

    useEffect(() => {
        fetchInfos()
    }, [])
    
    return (
        <StyledSteps>
            {infos.map(info => (
                <StepInfo info={info} key={info.id}/>
            ))}
        </StyledSteps>
    )
}
