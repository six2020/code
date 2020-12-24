const express = require('express');

let router = express.Router();

router.use('/abc', require('./abc'))

router.get('/', ( req, res ) => {
    res.send(`用户列表的首页`)
})
router.get('/:id', ( req, res ) => {
    res.send(`${req.params.id} 用户的首页`)
})
router.get('/:id/detail', ( req, res ) => {
    res.send(`${req.params.id} 用户的详情页`)
})


module.exports = router;