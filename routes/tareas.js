let express = require('express');

let router = express.Router();

router.get('/', (req,res) =>{
    console,log('RECIBI UN REQUEST')
    res.json(`{"status":"ok"}`)
})

module.exports = router;