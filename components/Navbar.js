import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    <div>
      <nav className='flex justify-between border-2 p-4  bg-blue-500 text-white text-2xl'>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div className='flex gap-8 mx-4 '>
          <Link href='/formulario'>Agregar Victoria</Link>
          <Link href='#'>2</Link>
          <Link href='#'>3</Link>
        </div>
      </nav>
    </div>
  )
}
