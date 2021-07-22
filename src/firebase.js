import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAT22qiaBmLWqbak6Wm9YzovNdfI6X5GcU',
  authDomain: 'whatsapp-clone-e9199.firebaseapp.com',
  projectId: 'whatsapp-clone-e9199',
  storageBucket: 'whatsapp-clone-e9199.appspot.com',
  messagingSenderId: '776032691022',
  appId: '1:776032691022:web:c0d12e2e631d619fd3f41f',
  measurementId: 'G-D6PL0B7GGN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
