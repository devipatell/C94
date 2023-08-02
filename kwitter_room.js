
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCvQ0VxmIgjE-uF-Rnn5r9TvMtkvHhDyLA",
      authDomain: "lets-chat-ae2e4.firebaseapp.com",
      databaseURL: "https://lets-chat-ae2e4-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ae2e4",
      storageBucket: "lets-chat-ae2e4.appspot.com",
      messagingSenderId: "837028151259",
      appId: "1:837028151259:web:de8faf2e12ceff316b31fe"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
