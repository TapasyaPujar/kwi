
//ADD YOUR FIREBASE LINKS

  //const firebaseConfig 
   var firebaseConfig = {
    apiKey: "AIzaSyDe0dFwTIpfk3YSFFIWtkygzSwrAZ1jjCI",
    authDomain: "nodal-rex-283614.firebaseapp.com",
    databaseURL: "https://nodal-rex-283614-default-rtdb.firebaseio.com",
    projectId: "nodal-rex-283614",
    storageBucket: "nodal-rex-283614.appspot.com",
    messagingSenderId: "480396696319",
    appId: "1:480396696319:web:9a77f12cc0e9cd893fcaca"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);

  function addUser(){

    user_name=document.getElementById("user_name").value;
      
      firebase.database().ref("/").child(user_name).update({purpose:"hello"});
      
  }