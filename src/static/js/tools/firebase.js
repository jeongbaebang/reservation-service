/* eslint-disable import/no-unresolved */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCukhak2OPlsDxZovcxsa3cj7ifBQCrsyY',
  authDomain: 'reservationservice-38e70.firebaseapp.com',
  projectId: 'reservationservice-38e70',
  storageBucket: 'reservationservice-38e70.appspot.com',
  messagingSenderId: '601475106569',
  appId: '1:601475106569:web:884ae015bbb783806235d8',
  measurementId: 'G-H7LXSBG76F'
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default class {
  fireStore() {
    return {
      getFirestore,

      doc,

      addDoc,

      getDoc,

      getDocs,

      collection,

      query,

      orderBy,

      onSnapshot
    };
  }
}
