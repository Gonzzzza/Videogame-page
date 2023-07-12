const { Router } = require('express');
const getAllVideogames = require('../controllers/getGames');
const { Videogame, Genre } = require('../db');


const router = Router();

router.get('/', async (req, res) => {
    try{
        const { name } = req.query
        const gamesTotal = await getAllVideogames();
        if(name) {
            const gamename = gamesTotal
                .filter((g) => g.name.toLowerCase().includes(name.toLowerCase()))
                .slice(0, 15);
            gamename.length 
                ? res.status(200).send(gamename) 
                : res.status(404).send('No existe juego con ese nombre');
        } else {
            res.status(200).send(gamesTotal)
        }
    }catch(error){
        res.status(404).send({msg: error.message})
    }
});



router.post('/', async (req, res) => {
	try {
		let { name, image, released, rating, platforms, description, createdInDb, genres } =
			req.body;
		let gameCreated = await Videogame.create({
			name,
			image,
			released,
			rating,
			platforms,
			description,
			createdInDb,
		});
		let genresDb = await Genre.findAll({
			where: { name: genres },
		});
		await gameCreated.addGenre(genresDb);
		res.status(201).send('Juego creado correctamente');
	} catch (error) {
		res.status(400).send({ error: error.message, message: 'line48' });
	}
});


module.exports = router;

