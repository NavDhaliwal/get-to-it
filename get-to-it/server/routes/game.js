const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
// 	console.log("Backend API called");
//   	res.send('api works');
// });

router.get('/', (req, res, next) => {
    console.log("Backend game called");
    res.render('game/' + req.params.id);
});

module.exports = router;