import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDykqwO7_JBhF9JKTI0kN3EC6omHDd0RnQ',
  authDomain: 'react-firebase-chat-app-b9858.firebaseapp.com',
  projectId: 'react-firebase-chat-app-b9858',
  storageBucket: 'react-firebase-chat-app-b9858.appspot.com',
  messagingSenderId: '272604043911',
  appId: '1:272604043911:web:6cdab6fc6fa968e392b622',
  measurementId: 'G-JPK9GEEGZS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
