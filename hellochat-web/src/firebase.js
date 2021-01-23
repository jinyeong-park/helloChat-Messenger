// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVR_vTBxLnqMjFYs58DGmzD-swwl_ctF0",
  authDomain: "hellochat-web.firebaseapp.com",
  projectId: "hellochat-web",
  storageBucket: "hellochat-web.appspot.com",
  messagingSenderId: "736476103843",
  appId: "1:736476103843:web:3cac01fe9212890a72ab16",
  measurementId: "G-9PCXW3B0JS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db