import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiQisV2gzeZybHd3uvMGM4l_PviWZ7MsE",
    authDomain: "my-drive-79f05.firebaseapp.com",
    projectId: "my-drive-79f05",
    storageBucket: "my-drive-79f05.firebasestorage.app",
    messagingSenderId: "340724062175",
    appId: "1:340724062175:web:7e1debb0fb7683a63dd66a",
    measurementId: "G-9J7N6BR1JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
