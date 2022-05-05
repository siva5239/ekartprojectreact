import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGiDQ78iynq3ZnQDfQQslBvyJ7h7EvI8A",
    authDomain: "react-project-2e7b8.firebaseapp.com",
    databaseURL: "https://react-project-2e7b8-default-rtdb.firebaseio.com",
    projectId: "react-project-2e7b8",
    storageBucket: "react-project-2e7b8.appspot.com",
    messagingSenderId: "514724609060",
    appId: "1:514724609060:web:aab3c1ca9b0e4c80b32cb1"
  };
  firebase.initializeApp(firebaseConfig)
  var storage= firebase.storage()
 
  export default storage