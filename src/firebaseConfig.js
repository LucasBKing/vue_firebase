import firebase from 'firebase';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAcgDNTg2bPwu0TFR7NyrC2NVlzOxosCTo",
    authDomain: "vue-blog-b906d.firebaseapp.com",
    databaseURL: "https://vue-blog-b906d.firebaseio.com",
    projectId: "vue-blog-b906d",
    storageBucket: "vue-blog-b906d.appspot.com",
    messagingSenderId: "424265663234"
};

firebase.initializeApp(config);

// Firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser =  auth.currentUser;

// Data issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
