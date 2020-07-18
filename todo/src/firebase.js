  import firebase from 'firebase';

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDy7Hp8kRz8vI2YgY4wqDtx7EFXFOP3RiI",
    authDomain: "todo-app-cp-2b076.firebaseapp.com",
    databaseURL: "https://todo-app-cp-2b076.firebaseio.com",
    projectId: "todo-app-cp-2b076",
    storageBucket: "todo-app-cp-2b076.appspot.com",
    messagingSenderId: "783070520328",
    appId: "1:783070520328:web:0a643ffff4e9d9870d9dbd",
    measurementId: "G-4CYGKG7N1S"
  });

  const db=firebaseApp.firestore();
  
  export{ db };