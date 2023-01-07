import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import firebaseApp from '../firebase'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc
} from 'firebase/firestore'
import { async } from '@firebase/util'
import Card from '../components/Card'
const db = getFirestore(firebaseApp)

export default function Home ({ win }) {
  return (
    <div>
      <Layout>
        <div className='grid grid-cols-3 gap-4'>
          {win.map(win => (
            <div>
              <Card
                key={win.id}
                id={win.id}
                nombre={win.nombre}
                arena={win.arena}
                fecha={win.fecha}
                killFinal={win.killFinal}
                modo={win.modo}
                tipo={win.tipo}
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

//render por parte del servidor, funcionalidad de Next
export const getServerSideProps = async context => {
  const querySnapshot = await getDocs(collection(db, 'wins'))
  const docs = []
  querySnapshot.forEach(doc => {
    docs.push({ ...doc.data(), id: doc.id })
  })

  return {
    props: {
      win: docs
    }
  }
}
