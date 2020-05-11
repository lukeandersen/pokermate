import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDSBbCaOsOugM09yvNmOeRz5jHec1sgee4",
    authDomain: "pokermate-9aab7.firebaseapp.com",
    databaseURL: "https://pokermate-9aab7.firebaseio.com",
    projectId: "pokermate-9aab7",
    storageBucket: "pokermate-9aab7.appspot.com",
    messagingSenderId: "802292736041",
    appId: "1:802292736041:web:6f536d625b449958effc38",
    measurementId: "G-MB87YFZHGN"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const db = firebase.firestore()

export { firebase, db }
