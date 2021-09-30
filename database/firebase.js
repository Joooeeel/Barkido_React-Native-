import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {

};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

/*RULES
match /public/{imageId} {
        allow read: if resource.size < 100 * 1024;
        allow write: if imageId.matches(".*\\.txt");
        }
*/

