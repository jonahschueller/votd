const Firestore = require('@google-cloud/firestore');
const express = require('express');

const firestore = new Firestore({
  projectId: 'code-it-292909'
});

// Firestore collection paths
const appCollection = 'votd/polls';
const pollCollection = `${appCollection}/polls`;

// API-URL paths
const pollPath = 'poll'

// Instantiate an express object
var app = express();

app.use('/poll/:id', (req, res) => {
     let id = req.params.id;

     return res.status(200).send({
          message: `Fetching poll: ${id}`
     });
});

// This endpint will send the latest added polls to the client
app.use('/polls/latest', (req, res) => {
     // Set a default limit
     var limit = 10;

     // In case the client specified a custom limit
     // Allow max batch size of 50
     if (req.query.limit && req.query.limit < 50) {
          limit = req.query.limit;
     }

     const ref = firestore.collection(pollCollection);
     
     ref.orderBy('timestamp').limit(limit).get()
     .then((polls) => {
          return res.status(200).send(polls.docs);
     })
     .catch((err) => {
          return res.status(404).send(value)
     });


     // if (!polls.empty) {
     //      return res.status(200).send(polls.docs);
     // } else {
          // return res.status(404).send({
          //      message: `No polls found.`
          // })
     // }
});

// Make the GFS handler use the express app.
exports.restAPI = app;
