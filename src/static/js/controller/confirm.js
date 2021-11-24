import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

import tools from '../tools/index.js';
import router from '../router/index.js';

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

export default class extends tools {
  controller() {
    const $form = document.forms.reservation;
    if (!$form) return;

    const cE = super.createElement;
    const aC = super.appendChild;
    const qS = super.querySelector;
    const getId = super.getElementById;
    const storage = super.localStorage;
    const { parse } = super.JSON();
    const { navigate } = router;

    const STORAGE_MENU_KEY = 'menuReservationInfo';
    const STORAGE_USER_KEY = 'userReservationInfo';

    const menu = storage(STORAGE_MENU_KEY).get();
    const user = storage(STORAGE_USER_KEY).get();

    if (!user || user.length === 2) {
      navigate('/user_reservation');
      return;
    }

    if (!menu || menu.length === 2) {
      navigate('/menu_reservation');
      return;
    }

    function createItemList(itemName, itemText) {
      const $itemContent = cE('div', 'item-content');
      const $itemContentText = cE('div', 'text', `${itemName} : ${itemText}`);

      aC($itemContent, $itemContentText);

      return $itemContent;
    }

    function createTextArea(id) {
      const $target = getId(id);
      const $itemContent = cE('div', 'item-content');
      const $textara = cE('textarea');

      $textara.placeholder = '맵기조절등 원하는 요청이 있다면 적어주세요';
      aC($itemContent, $textara);

      aC($target, $itemContent);
    }

    function createItem(id, json) {
      if (!json) return;
      const $target = getId(id);
      const $fragment = document.createDocumentFragment();
      const value = Object.entries(parse(json));

      value.forEach(v => {
        aC($fragment, createItemList(v[0], v[1]));
      });

      aC($target, $fragment);
    }

    createItem('confirm-personal', user);
    createItem('confirm-menu', menu);
    createTextArea('confirm-request');
    const handlers = {
      async submit(event) {
        event.preventDefault();
        const request = qS(
          getId('confirm-request'),
          '.item-content textarea'
        ).value;

        if (window.confirm('go?')) {
          const db = getFirestore();

          try {
            const docRef = await addDoc(collection(db, 'users'), {
              time: new Date(),
              menu,
              user,
              request
            });
            console.log('Document written with ID: ', docRef.id);
            storage().clear();
          } catch (e) {
            console.error('Error adding document: ', e);
          }
        }
      }
    };
    super.addEventListener($form, 'submit', handlers.submit);
  }
}
