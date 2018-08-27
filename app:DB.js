// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDYoo1Aq-XSfHHtV_-PdJImtcw2cdm-GDU",
  authDomain: "joust-50b62.firebaseapp.com",
  databaseURL: "https://joust-50b62.firebaseio.com",
  projectId: "joust-50b62",
  storageBucket: "joust-50b62.appspot.com",
  messagingSenderId: "191760874787"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Jousters');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var age = getInputVal('age');
  var email = getInputVal('email');
  var location = getInputVal('address');


  // Save message
  saveMessage(firstname, lastname, age, email, location);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, age, email, location){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:firstname,
    lastname:lastname,
    age:age,
    email:email,
    location:location
  });
}
