const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const admin =require('../models/admin');


const app=express();

app.use(cors({ origin: 'http://localhost:3005' }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sportsapp')
.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("failed to connect");
})

app.post('/Signup', async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        password: req.body.password,
      };
      await admin.insertMany([data]);
      res.status(200).send('Signup successful');
    } catch (error) {
      console.error('Error during signup:',error);
      res.status(500).send('An error occurred during signup.');
    }
  });

  app.post('/Login', async (req, res) => {
    try {
      const check = await admin.findOne({ name: req.body.name });
      if (check && check.password === req.body.password) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Incorrect name or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('An error occurred during login.');
    }
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });