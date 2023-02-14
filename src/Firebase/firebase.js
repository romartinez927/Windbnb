import { initializeApp  } from "firebase/app";
import { 
    getFirestore, 
    collection,
    getDocs,
    where,
    query} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAy_IPAPF-BBAL-yN1IDnOZotcUA-L-RLM",
  authDomain: "windbnb-challenge-24e01.firebaseapp.com",
  projectId: "windbnb-challenge-24e01",
  storageBucket: "windbnb-challenge-24e01.appspot.com",
  messagingSenderId: "47700660950",
  appId: "1:47700660950:web:14a607cc7f892c7777af77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Funcion para importar propiedades desde firebase

export async function getProperties() {
    const data = collection(db, "properties")
    const snapshot = await getDocs(data)
    
    const propiedades = snapshot.docs.map((item) => {
        let propiedad = item.data()
        propiedad.id = item.id
        return propiedad
    })
    return propiedades
}

// Función para filtar por ciudad
export async function filterCity(city) {
    const data = collection(db, "properties")
    const q = query(data, where("city", "==", city),)
    const snapshot = await getDocs(q)
    const propiedades = snapshot.docs.map((item) => {
        let propiedad = item.data()
        propiedad.id = item.id
        return propiedad
    })
    return propiedades
}
