import React from 'react'

const Card = props => {
  const { id, nombre, arena, fecha, killFinal, modo, tipo } = props
  return (
    <div>
      <div className='border-2 border-black'>
        <h1>{nombre}</h1>
        <h2>{arena}</h2>
        <h3>{fecha}</h3>
        <h3>{killFinal}</h3>
        <h3>{modo}</h3>
        <h3>{tipo}</h3>
      </div>
    </div>
  )
}

export default Card
