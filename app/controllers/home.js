'use strict';

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.jsonp({ message:'what up ?', headers: req.headers });
});

module.exports = router;
