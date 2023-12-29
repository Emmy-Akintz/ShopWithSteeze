
const admin = require('firebase-admin');

// const encodedPrivateKey = process.env.PRIVATE_KEY;
// const privateKey = Buffer.from(encodedPrivateKey, 'base64').toString('utf8');

var serviceAccount = require("../larry-pat-foods-firebase-adminsdk-js8c5-c69dd688f0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://larry-pat-foods-default-rtdb.firebaseio.com"
});

module.exports = admin;
