import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAnalytics } from "firebase/analytics";

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

var analytics = getAnalytics(fireBaseApp);

export var db = fireBaseApp.firestore();

export var users = db.collection('users')

users.get().then(snap=> {
    console.log(snap.size)
    console.log('here it is')
})

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

export var searchActivities = async (club_type, id,data) => {
    var activitiesref = db.collection(club_type + '/' + id + '/activities')
    await activitiesref.get().then( snapshot => {
        snapshot.forEach(doc => {
            data.activities.push(doc.data())
        })
    })
}

export var fetchClubData = async club_type => {
    var clubsref = db.collection(club_type)
    var data = []
    await clubsref.get().then( snapshot => {
        snapshot.forEach( async doc => {
            var club = {
                logo_url: '',
                activities: [],
                id: '',
                title: '',
                type: '',
                image_url: '',
                description: '',
                link: ''
            }
            club.logo_url = doc.data().logo_url
            club.id = doc.id
            club.title = doc.data().title
            club.description = doc.data().general_description
            club.type = doc.data().type
            club.link = doc.data().link
            //club.thumbnail_description = doc.data().thumbnail_description
            club.image_url = doc.data().image_url
            await searchActivities(club_type, doc.id, club).then(() => {
                data.push(club)
            })
        })
    })
    return data
}

var sportsData;
fetchClubData('clubs_sports').then( res => {
    sportsData = res;
})

export { sportsData }