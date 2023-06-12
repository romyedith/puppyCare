import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configura la información de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyASTjHtFeLlC5xhm0FAhCgKpqLdVls5YH8",
    authDomain: "puppycare-a578a.firebaseapp.com",
    projectId: "puppycare-a578a",
    storageBucket: "puppycare-a578a.appspot.com",
    messagingSenderId: "922005816631",
    appId: "1:922005816631:web:1e8f0233082fd5277186b2"
  };

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export { db };