const Firestore = require('@google-cloud/firestore');
const express = require('express');

const firestore = new Firestore({
  projectId: 'code-it-292909',
  keyFilename: '/Users/jonahschueller/.config/gcloud/code-it-292909-abacc04d59f0.json',
});

// Firestore collection paths
const appCollection = 'votd/polls';
const pollCollection = `${appCollection}/polls`;

// API-URL paths
const pollPath = 'poll'

// Instantiate an express object
var app = express();

function extractLimit(req) {
     // Set a default limit
     var limit = 10;

     // In case the client specified a custom limit
     // Allow max batch size of 50
     if (req.query.limit && req.query.limit < 50) {
          limit = req.query.limit;
     }

     return limit
}

function preparePoll(doc) {
     return {
          id: doc.id,
          data: doc.data()
     }
}

//* This URL can be used to fetch polls by their id
app.use('/poll/:id', (req, res) => {

     // Get the id from the url
     let id = req.params.id;

     // Make sure the id exist
     if (id != null) {
          // Get the firestore reference
          const ref = firestore.doc(`${pollCollection}/${id}`);

          // Get the document
          ref.get()
          .then((doc) => {
               if (doc.exists) { // If the document exists -> Send the data back
                    return res.status(200).send(preparePoll(doc));
               }else { // Otherwise -> Send back an error.
                    res.status(404).send({
                         message: "Seems like this poll doesn't exist."
                    });
               }
          }).catch ((err) => {
               return res.status(200).send({
                    message: "Seems like this poll doesn't exist."
               });
          });
     }else { // Something went wrong. There is no id specified.
          res.status(404).send({
               message: "Id not specified"
          });
     }
});

//* This endpint will send the latest added polls to the client
app.use('/polls/latest', (req, res) => {
     // Get the doc limit
     var limit = extractLimit(req);

     // Get the firestore reference
     const ref = firestore.collection(pollCollection);
     
     // Order and limit the data
     ref.orderBy('timestamp').limit(limit).get()
     .then((polls) => { // Send back the data to the client
          return res.status(200).send({
               "polls": polls.docs.map( doc => preparePoll(doc) )
          });
     }).catch((err) => { // In case of an error send back an error.
          return res.status(404).send(err)
     });
});

app.use('/polls/popular', (req, res) => {
     // Get the doc limit
     var limit = extractLimit(req);

     // Get the firestore reference
     const ref = firestore.collection(pollCollection);
     
     ref.orderBy('votes').limit(limit).get() 
     .then((polls) => { // Send back the data to the client
          return res.status(200).send({
               "polls": polls.docs.map( doc => preparePoll(doc) )
          });
     }).catch((err) => { // In case of an error send back an error.
          return res.status(404).send(err)
     });
});

// * Gives the client the ability to search for keywords
app.use('/polls/search', (req, res) => {

     // Extract the limit for the query
     let limit = extractLimit(req);

     var keywords = []

     // Extract the query keywords
     if (req.query.keywords instanceof Array) {
          keywords = req.query.keywords
     } else {
          keywords = [req.query.keywords]
     }

     // Map all keywords to lowercase to make the search less precise
     keywords = keywords.map(keyword => keyword.toLowerCase());

     // Get a reference to the firestore collection
     let ref = firestore.collection(pollCollection);

     // Include a poll if it has at least one of the given keywords
     ref.where('keywords', 'array-contains-any', keywords).limit(limit).get()
     .then((polls) => { // Send back the data to the client
          return res.status(200).send({
               "polls": polls.docs.map( doc => preparePoll(doc) )
          });
     }).catch((err) => { // In case of an error send back an error.
          return res.status(404).send(err)
     });

});

// Make the GFS handler use the express app.
exports.restAPI = app;
