import React, { useEffect, useState } from 'react'
import { StyledSteps } from './StyledSteps'
import Axios from "axios";
import { StepInfo } from './StepInfo';
import group from '../../public/content/group.png'
import Image from 'next/image';

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
        <>
            <StyledSteps>
                {infos.map(info => (
                    <StepInfo info={info} key={info.id} />
                ))}
            </StyledSteps>
            <div
                style={{
                    margin: 'auto',
                    width: "79%"
                }}
            >
                <Image
                    src={group}
                    alt="group image"
                    layout='responsive'
                />
            </div>
        </>
    )
}
