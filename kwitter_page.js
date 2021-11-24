var firebaseConfig = {
      apiKey: "AIzaSyCIQNSYNwUZDC2SBsgCc3vaX0pbMHEakFA",
      authDomain: "practise-1-9f841.firebaseapp.com",
      databaseURL: "https://practise-1-9f841-default-rtdb.firebaseio.com",
      projectId: "practise-1-9f841",
      storageBucket: "practise-1-9f841.appspot.com",
      messagingSenderId: "614141033063",
      appId: "1:614141033063:web:614c0c69e3b96c25c572c2"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name, message:msg, like:0

});
document.getElementById("msg").value="";
}