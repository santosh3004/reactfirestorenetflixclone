import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2_MDaD7TrEhpezDO5d65PwnXJPwmjsv4",
  authDomain: "netflixclonepractise.firebaseapp.com",
  projectId: "netflixclonepractise",
  storageBucket: "netflixclonepractise.appspot.com",
  messagingSenderId: "296687952182",
  appId: "1:296687952182:web:ced033544b016f0feb5397"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth}
export default db;