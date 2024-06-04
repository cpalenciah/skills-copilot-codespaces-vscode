// Create web server to handle comments
// Dependencies: express, body-parser, jsonfile, fs

// Load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs = require('fs');

// Create web server
var app = express();
app.use(bodyParser.json());

// Set up comments file
var COMMENTS_FILE = 'comments.json';

// Get all comments
app.get('/api/comments', function(req, res) {
  jsonfile.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(data);
  });
});

// Add a comment
app.post('/api/comments', function(req, res) {
  jsonfile.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var newComment = {
      id: Date.now(),

