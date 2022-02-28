## CliCasa - React

### Principales tecnologías utilizadas:
1. NextJS para optimización de complementos.
2. Styled-Components para estilado general.
3. SpringBoot & SQL para Back-End simple.
4. Axios para el fetch de la data.

## Gif de la maquetación:

![Giphy](https://media.giphy.com/media/hs1l2bLhpu2wmDm76c/giphy.gif)

## Estructura de carpetas:

![Cloudinary](https://res.cloudinary.com/ivandipa/image/upload/v1645887966/Organization_wsyxcr.png)

## Componentes destacados:

### Steps.js
Renderiza la información proporcionada por el back. (SQL + SpringBoot)

```
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
```

#### Data proporcionada:

![Cloudinary](https://res.cloudinary.com/ivandipa/image/upload/v1645888403/data_jzsxpx.png)


### StepInfo.js
Data mapeada, muestra paso de propiedades mediante componentes.

```
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
```
## Modo de ejecución:
```
git clone https://github.com/IvanAriDiPaolo/CliCasa.git
```
y luego:
```
npm run dev
```

#### Gracias por haber leido!
