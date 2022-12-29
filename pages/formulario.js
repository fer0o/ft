import React from 'react'
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

const database = getFirestore(firebaseApp)

const Formulario = () => {
  return (
    <div>
      <Layout>
        <div className='container'>
          <h2>Formulario de Wins</h2>
        </div>
      </Layout>
    </div>
  )
}

export default Formulario
