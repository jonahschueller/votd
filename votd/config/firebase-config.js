import firebase from 'firebase';

var firebaseConfig = {
     apiKey: process.env.apiKey,
     authDomain: process.env.authDomain,
     databaseURL: process.env.databaseURL,
     projectId: process.env.projectId,
     storageBucket: process.env.storageBucket,
     messagingSenderId: process.env.messagingSenderId,
     appId: process.env.appId
};

try {
     firebase.initializeApp(firebaseConfig);
} catch(err){
     if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack)
     }
}
const fire = firebase;
export default fire;