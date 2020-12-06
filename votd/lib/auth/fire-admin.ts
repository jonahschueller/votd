import * as fireadmin from 'firebase-admin'

var PATH_TO_KEY = process.env.admin_key_path;

var serviceAccount = require(PATH_TO_KEY);

fireadmin.initializeApp({
    credential: fireadmin.credential.cert(serviceAccount),
    databaseURL: "https://code-it-292909.firebaseio.com"
});


export default { fireadmin }