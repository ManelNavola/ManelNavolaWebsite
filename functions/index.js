// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.readSongs = functions.https.onRequest(async (req, res) => {
  var db = admin.firestore();
  db.collection('songs').get().then(snapshot => {
    var pl = {
      data: []
    }
    snapshot.forEach(doc => {
      var element = {
        'name': doc.id,
        'release': doc.data().release,
        'image': doc.data().image
      }
      if (doc.data().youtube !== null) {
        element.youtube = doc.data().youtube
      }
      if (doc.data().spotify !== null) {
        element.spotify = doc.data().spotify
      }
      if (doc.data().apple !== null) {
        element.apple = doc.data().apple
      }
      pl.data.push(element)
    });
    res.set('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(pl));
    return '';
  }).catch(reason => {
    res.send(reason);
  });
});