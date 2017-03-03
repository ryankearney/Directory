var express = require('express');
var router = express.Router();
var ActiveDirectory = require('activedirectory');
var config = require('../config');

var ad = new ActiveDirectory(config);
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
        ad.findUsers('ipPhone=*', function(err, user) {
        	if (err) {
                	console.log('Error: ' + JSON.stringify(err));
                	return;
		}
	        if (!user) {
        	        console.log('User not found');
        	} else {
			var sorted = _.sortBy(user, ['department']);
			res.render('index', { users: sorted });
        	}
	});
});

module.exports = router;
