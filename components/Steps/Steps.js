import React, { useEffect, useState } from 'react'
import { StyledImg, StyledSteps } from './StyledSteps'
import Axios from "axios";
import { StepInfo } from './StepInfo';
import group from '../../public/content/group.png'
import Image from 'next/image';

export const Steps = () => {
    const [infos, setInfos] = useState([])

    //Estado destinado a resaltar la imagen según el id del paso que se haya seleccionado.
    const [selected, setSelected] = useState(1)

    const fetchInfos = async () => {
        const { data } = await Axios.get(
            // "http://localhost:8080/info/getAll"
            "http://localhost:3000/api/data"
        );
        setTimeout(() => {
            setInfos(data)
        }, 1200);
    }

    useEffect(() => {
        fetchInfos()
    }, [])

    return (
        <>
            <StyledSteps>
                {infos.map(info => (
                    <StepInfo info={info} key={info.id} setSelected={setSelected}/>
                ))}
            </StyledSteps>
            <StyledImg>
                <Image
                    src={group}
                    alt="group image"
                    layout='fixed'
                    width={1200}
                    height={600}
                    priority
                />
            </StyledImg>
        </>
    )
}
