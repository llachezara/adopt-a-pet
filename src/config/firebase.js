import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlcRxz3fj9_RmFqI3agcs6u4udL65gGRE",
    authDomain: "adopt-a-pet-de9a9.firebaseapp.com",
    projectId: "adopt-a-pet-de9a9",
    storageBucket: "adopt-a-pet-de9a9.appspot.com",
    messagingSenderId: "717279637003",
    appId: "1:717279637003:web:2eb7d78c762eb52578e10e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);