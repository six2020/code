const express = require('express');

let router = express.Router();

let Abc = require('./abcHandle');

let abc = new Abc;



router.get('/', ( req, res ) => {
    res.send(`abc`)
})
router.get('/a', abc.a())
router.get('/b', abc.b())
router.get('/c', abc.c())





module.exports = router;