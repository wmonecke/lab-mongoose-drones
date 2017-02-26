const express = require('express');
const router = express.Router();
//I think we require the db here

//Requiring the models to maintain a file structure
const Drone = require('../models/drone.js');

router.get('/drones', (req, res, next) => {
  Drone.find((err, drones) => {  //finding the Drone collection and setting it to 'drones'
    if (err) {
      next (err);
      return;
    }

    // display views/drones/index.ejs
    res.render('drones/index', {
      drones: drones
    });
  });
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #4
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
