const express = require('express');

const router = express();

const authenticationRoutes = require('./auth');

router.get('/', (req, res) => {
    return res.status(200).send('what`s up, we have the api')
})

// router.use('/auth', authenticationRoutes);

module.exports = router;