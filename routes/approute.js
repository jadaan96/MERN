const { Router } = require('express');
const router = Router();
const  { createbook ,findall} = require('../contraller/contraller');

router.post('/createbook', createbook);
router.get('/findall', findall);


module.exports = router;
