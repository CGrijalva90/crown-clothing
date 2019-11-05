import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCg2KHjappShTCp_XFOpN4hYV95Eel63Y0",
	authDomain: "crwn-clothing-db-d0189.firebaseapp.com",
	databaseURL: "https://crwn-clothing-db-d0189.firebaseio.com",
	projectId: "crwn-clothing-db-d0189",
	storageBucket: "crwn-clothing-db-d0189.appspot.com",
	messagingSenderId: "204872555733",
	appId: "1:204872555733:web:5a07f6c05890d6eb9a565c",
	measurementId: "G-1YNDYS1Z88"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;