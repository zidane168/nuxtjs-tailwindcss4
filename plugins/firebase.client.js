// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';


export default defineNuxtPlugin(() => {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAa5ZUY-jPChQn-yrCWJDMMu1jrRNhTAnk",
        authDomain: "habitapps-4b7d1.firebaseapp.com",
        projectId: "habitapps-4b7d1",
        storageBucket: "habitapps-4b7d1.firebasestorage.app",
        messagingSenderId: "210805329631",
        appId: "1:210805329631:web:79adffd7e41f4a0f5a636a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db  = getFirestore(app);

    return {
        provide: {
            firebaseApp: app,
            db
        }
    }
})

// const { $db } = useNuxtApp()
