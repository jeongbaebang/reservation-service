// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   onSnapshot,
//   doc
// } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

import router from './router/index.js';

const { route, navigate } = router;

window.addEventListener('popstate', () => {
  route();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('click', e => {
    if (!e.target.matches('[data-link]')) return;
    e.preventDefault();
    navigate(e.target.dataset.link);
  });

  route();
});

// const firebaseConfig = {
//   apiKey: 'AIzaSyCukhak2OPlsDxZovcxsa3cj7ifBQCrsyY',
//   authDomain: 'reservationservice-38e70.firebaseapp.com',
//   projectId: 'reservationservice-38e70',
//   storageBucket: 'reservationservice-38e70.appspot.com',
//   messagingSenderId: '601475106569',
//   appId: '1:601475106569:web:884ae015bbb783806235d8',
//   measurementId: 'G-H7LXSBG76F'
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// const db = getFirestore();
// const unsub = onSnapshot(collection(db, 'users'), doc => {
//   const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
//   console.log(source, ' data: ', doc);
//   doc.forEach(x => {
//     console.log(x.data());
//   });
// });

// window.addEventListener('unload', () => {
//   unsub();
// });
// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach(doc => {
//   const test = {
//     id: doc.id,
//     test: doc.data()
//   };
//   console.log(test);
// });
