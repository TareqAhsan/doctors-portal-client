import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'
const initializefirebase = ()=>{
    initializeApp(firebaseConfig);
}
export default initializefirebase;