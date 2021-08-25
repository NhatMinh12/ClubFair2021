// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

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
var fireBaseApp = firebase.initializeApp(firebaseConfig);

export var db = fireBaseApp.firestore();

export var fetchLogoURLS = async club_type => {
    var logoURLS = []
    var clubsref = db.collection(club_type)
    await clubsref.get().then( snapshot => {
        snapshot.forEach(doc => {
            logoURLS.push(doc.data().logo_url)
        })
    })
    return logoURLS
};