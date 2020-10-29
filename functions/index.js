const Firestore = require('@google-cloud/firestore');
const express = require('express');

const firestore = new Firestore({
  projectId: 'code-it-292909'
});

// Firestore collection paths
const appCollection = 'votd';
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

app.use('/polls/', (req, res) => {

     return res.status(200).send({
          message: `Fetching polls`
     });
});

// Make the GFS handler use the express app.
exports.restAPI = app;
