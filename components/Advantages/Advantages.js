import React from 'react'
import { MappedItem } from './MappedItem'
import { StyledAdvantages } from './StyledAdvantages'

export const Advantages = () => {
  const data = [
    {
      id: 'oferta',
      titulo: 'Oferta en 24 h',
      desc: 'No te preocupes de su estado, ni de reparaciones para eneseñarlo',
      imgSrc: 'clock'
    },
    {
      id: 'pago',
      titulo: 'Pago inmediato',
      desc: 'No te preocupes de su estado, ni de reparaciones para eneseñarlo',
      imgSrc: 'pay'
    },
    {
      id: 'ahorrar',
      titulo: 'Ahórrate el papeleo',
      desc: 'Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar',
      imgSrc: 'paperplane'
    },
    {
      id: 'fecha',
      titulo: 'Tu eliges la fecha',
      desc: 'Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar',
      imgSrc: 'calendar'
    },
  ]

  return (
    <StyledAdvantages>
      <h2>En Clicaca sólo hay ventajas</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        {data.map(item=> (
          <MappedItem item={item} key={item.id}/>
        ))}
      </div>
    </StyledAdvantages>
  )
}
