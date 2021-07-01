//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0u44DvEaCNcnNTF3JMdOPal-pk8vm5hQ",
    authDomain: "kwitter-914c7.firebaseapp.com",
    databaseURL: "https://kwitter-914c7-default-rtdb.firebaseio.com",
    projectId: "kwitter-914c7",
    storageBucket: "kwitter-914c7.appspot.com",
    messagingSenderId: "780520726518",
    appId: "1:780520726518:web:5d7c5c74efa070da3b31d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
