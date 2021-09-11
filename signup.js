// function sendUserInfo() {
//     function User(email, password, username) {
//         this.email = email
//         this.password = password
//         this.username = username
//     }
//     var user

//     getUserInfo()
// function checkPwd(pwInput, confirm_password) {
//     //Check password

//     if (pwInput.length >= 8) {
//         if (confirm_password == pwInput) {
//             //valid
//             // console.log("valid password")
//             return true;
//         }
//         else {
//             alert('Please confirm your password');
//         }
//     } else {
//         //invalid
//         alert('Invalid password');
//     }
// }

//     //save in database
//     firebase.database().ref("users").push().set({
//         "username": user.username,
//         "email": user.email,
//         "password": user.password,
//     });

//     //prevent form from submitting
//     return false;
// }

// var btnCreate = document.getElementById("create-button");
// btnCreate.addEventListener("click", function () {
//     sendUserInfo();
// })

//getting data from database
// db.collection('users').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//     })
// });

//saving data
var firebaseConfig = {
    apiKey: "AIzaSyD-E6pXWN5w2HYoHser-0t29cZRtA9_1wo",
    authDomain: "clubfair2021.firebaseapp.com",
    projectId: "clubfair2021",
    storageBucket: "clubfair2021.appspot.com",
    messagingSenderId: "869511623195",
    appId: "1:869511623195:web:06dbfbb35d1498d46cfebe",
    databaseURL: "https://clubfair2021-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const form = document.getElementById('content');
var users = db.collection("users")
var btn = document.getElementById("create-button")


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.email.value != "" && form.username.value != "" && form.class.value != "" && form.number.value != "") {

        users.add({
            Class: form.class.value,
            Email: form.email.value,
            Name: form.username.value,
            Number: form.number.value
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                form.email.value = '';
                form.username.value = '';
                form.class.value = '';
                form.number.value = '';

                window.location.href = "./index.html"
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    } else {
        alert("Hãy thử lại!");
    }
});

// const chatroom =firebase.database().ref("chatrooms")
// chatrooms.push().set({
//     "id": 1,
//     "messages":[]
// })
