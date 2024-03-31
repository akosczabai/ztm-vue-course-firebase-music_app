import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDS9YGtArtPnlDpN7QPxY78L2eRpg8GN6U',
  authDomain: 'music-ea5c9.firebaseapp.com',
  projectId: 'music-ea5c9',
  storageBucket: 'music-ea5c9.appspot.com',
  // messagingSenderId: "397786747867",
  appId: '1:397786747867:web:608ce2b92f930d001d4dfe'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase presistance error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, storage, commentsCollection }
