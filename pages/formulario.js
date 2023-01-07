import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import firebaseApp from '../firebase'
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc
} from 'firebase/firestore'
const db = getFirestore(firebaseApp)

const Formulario = () => {
  const router = useRouter()

  // coleccion de objetos
  const valorInicial = {
    nombre: '',
    tipo: '',
    arena: '',
    killFinal: '',
    fecha: '',
    modo: ''
  }
  // manejo de useState
  const [dato, setDato] = useState(valorInicial)

  //capturar los inputs
  const obtenerInputs = e => {
    const { name, value } = e.target
    setDato({ ...dato, [name]: value })
  }
  //funcion para guardar info en firebase
  const enviarInfo = async e => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'wins'), {
        ...dato
      })
    } catch (error) {
      console.log(error)
    }
    //esta funcion lo que hace es una redirección
    router.push('/')
  }
  return (
    <div>
      <Layout>
        <div className='flex flex-col justify-center items-center border-2 border-black m-40 lg:p-8 w-96 lg:w-auto rounded-xl'>
          <h2 className='mb-8 text-3xl font-bold text-yellow-300'>
            Formulario de Wins
          </h2>
          <div>
            <form className=' flex flex-col space-y-2' onSubmit={enviarInfo}>
              <p>Nombre:</p>
              <input
                type='text'
                placeholder='nombre ganador'
                name='nombre'
                value={dato.nombre}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <p>Tipo (Solo/Duo/Trio/Squads):</p>
              <input
                type='text'
                placeholder='Solo/Duo/Trio/Squads'
                name='tipo'
                value={dato.tipo}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <p>Arena:</p>
              <input
                type='text'
                placeholder='si/no'
                name='arena'
                value={dato.arena}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <p>Kill Final:</p>
              <input
                type='text'
                placeholder='Nombre kill final'
                name='killFinal'
                value={dato.killFinal}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <p>Fecha:</p>
              <input
                type='date'
                placeholder='año/mm/día'
                name='fecha'
                value={dato.fecha}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <p>Modo (Con/Sin Construcción):</p>
              <input
                type='text'
                placeholder='con/sin'
                name='modo'
                value={dato.modo}
                onChange={obtenerInputs}
                required
                className='border-2 border-black rounded-lg p-2'
              />
              <div className='flex flex-row gap-8 m-4 '>
                <button className=' border-2 border-black px-8 py-2  mx-auto  rounded-lg'>
                  Enviar
                </button>
                <button
                  className=' border-2 border-black px-8 py-2 mx-auto rounded-lg'
                  onClick={() => router.push('/')}
                >
                  Volver
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Formulario
