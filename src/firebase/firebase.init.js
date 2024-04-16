
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLHdK8-u4F5Db0SMmf8XlhNvCEg3TA_n0",
    authDomain: "real-state-project-7b266.firebaseapp.com",
    projectId: "real-state-project-7b266",
    storageBucket: "real-state-project-7b266.appspot.com",
    messagingSenderId: "845985722535",
    appId: "1:845985722535:web:7b7f60671b742b30b5eb82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

