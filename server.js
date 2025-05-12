const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const snapPackRoutes = require('./Routes/snappackroutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:GIUHR6F8WxR5hd4C@backenddb.gfvtkoh.mongodb.net/snaps-inventory?retryWrites=true&w=majority&appName=BackendDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to database!");
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
})
.catch(() => {
  console.log("Connection Failed!");
});

// MOUNTING
app.use('/api/snapPacks', snapPackRoutes);