// Iteration #1

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone.js');

const drones = [
  {
    droneName: 'Amazon Drone',
    propellers: 4,
    maxSpeed: 100
  },
  {
    droneName: 'GoPro Karma Drone',
    propellers: 5,
    maxSpeed: 150
  },
  {
    droneName: 'DJI Phantom 2',
    propellers: 4,
    maxSpeed: 200
  }
];

Drone.create(drones, (err, docs) => { // === db.products.insertMany()
  if (err) {
    throw err;
  }

  docs.forEach((oneDrone) => {
    console.log(` name = "${oneDrone.droneName}", id = "${oneDrone._id}", propellers = "${oneDrone.propellers}" `);
  });

  mongoose.disconnect();
});
