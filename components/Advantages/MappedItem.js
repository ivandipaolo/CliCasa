import Image from 'next/image'
import React from 'react'
import { gallery } from '../../public/content/advantages/index'
import { StyledMappedItem } from './StyledMappedItem';
export const MappedItem = ({ item }) => {
    const { titulo, desc, imgSrc } = item;

    return (
        <StyledMappedItem>
            <Image
                src={gallery[imgSrc]}
                width={75}
                height={75}
            />
            <h4>{titulo}</h4>
            <p>{desc}</p>
        </StyledMappedItem>
    )
}
