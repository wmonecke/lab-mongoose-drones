const express = require('express');
const router = express.Router();

//Requiring the models to maintain a file structure
const Drone = require('../models/drone.js');

router.get('/drones', (req, res, next) => {

	Drone.find({}, {}, (err, drones) => { //finding the Drone collection result of the find === 'drones'
		if (err) {
			next(err);
			return;
		}

		// display views/drones/index.ejs
		res.render('drones/index', {
			drones: drones
		});
	});
});

router.get('/drones/new', (req, res, next) => {

	res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
	const droneInfo = {
		droneName: req.body.droneName,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed
	};

	const thisDrone = new Drone(droneInfo);

	thisDrone.save((err) => {
    if (err) {
      next (err);
      return;
    }

    res.redirect('/drones');
	});
});

router.get('/drones/:id', (req, res, next) => {
	let thisId = req.params.id;

	Drone.findById(thisId, (err, results) => {
		console.log(results);
		if (err) {
			next(err);
			return;
		}

		res.render('drones/show', {
			results: results
		});
	});
});


router.get('/drones/:id/edit', (req, res, next) => {
	let myId = req.params.id;

	Drone.findById(myId, (err, result) => {
		if (err) {
			next (err);
			return;
		}

		res.render('drones/edit', {
			result: result
		});
	});
});

router.post('/drones/:id', (req, res, next) => {
	let thisId = req.params.id;

	const droneInfo = {
		droneName: req.body.droneName,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed
	};

	Drone.findByIdAndUpdate(thisId, droneInfo, (err, result) => {

		res.redirect('/drones');
	});
});



router.post('/drones/:id/delete', (req, res, next) => {
	let thisId = req.params.id;

	Drone.findByIdAndRemove(thisId, (err, results) => {
		console.log(results);
		if (err) {
			next(err);
			return;
		}

		res.redirect('/drones');
	});
});


module.exports = router;
