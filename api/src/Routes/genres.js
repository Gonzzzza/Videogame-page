const { Router } = require('express');
const getTypes = require('../controllers/getGenres');
const { Genre } = require('../db');


const router = Router();

router.get('/', async (req, res) => {
	try {
		const allGenres = await Genre.findAll();
		res.status(200).json(allGenres);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;