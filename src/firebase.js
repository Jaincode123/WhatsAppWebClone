import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDy9mJqQXTCQMIF2j3mx1NVG54RQYc71fc",
  authDomain: "whatsapp-web-clone-74b1c.firebaseapp.com",
  // databaseURL : "https://whatsapp-web-clone-74b1c.firebaseio.com",
  projectId: "whatsapp-web-clone-74b1c",
  storageBucket: "whatsapp-web-clone-74b1c.appspot.com",
  messagingSenderId: "862650678066",
  appId: "1:862650678066:web:f6ce3160d837358de0b52b",
  measurementId: "G-V4FF6BY446"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
