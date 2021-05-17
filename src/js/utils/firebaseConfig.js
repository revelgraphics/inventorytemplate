import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAyCn2QeGDovE6zZKy-oxevLaIcpEJtkvo",
    authDomain: "tklt-cc54d.firebaseapp.com",
    projectId: "tklt-cc54d",
    storageBucket: "tklt-cc54d.appspot.com",
    messagingSenderId: "636053408057",
    appId: "1:636053408057:web:736d34c7a17543deccc0e8",
    measurementId: "G-EKMSKS8K6X"
};

firebase.initializeApp(firebaseConfig);

export { firebase };