import React from 'react'

const Card = props => {
  const { id, nombre, arena, fecha, killFinal, modo, tipo } = props
  return (
    <div>
      <div className='border-2 border-black flex flex-col p-4 w-96' key={id}>
        <div className=' flex flex-row justify-center space-x-2 py-2 '>
          <h3 className='font-bold'>Nombre Victoria:</h3>
          <p>{nombre}</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <h3 className='font-bold'>Fecha:</h3>
          <p>{fecha}</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <h3 className='font-bold'>Arena:</h3>
          <p>{arena}</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <h3 className='font-bold'>Kill Final:</h3>
          <p>{killFinal}</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <h3 className='font-bold'>Modo:</h3>
          <p>{modo} Construcción</p>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <h3 className='font-bold'>Tipo:</h3>
          <p>{tipo}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
