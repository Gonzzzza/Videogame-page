const { Router } = require('express');

const router = Router();

router.get('', async (req, res) => {
    res.status(404).send(`PAGE NOT FOUND`);
})



module.exports = router 