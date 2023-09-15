const express = require('express');

const router = express();

router.get('/', (req, res) => {
    return res.status(200).send('handle with care..')
})

module.exports = router;