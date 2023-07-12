const { Router } = require('express');
const getDetailGame = require('../controllers/getDetailGames');
const { Videogame, Genre } = require('../db');

const router = Router();


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        // if(id.length > 7) {

            const detailDb = async () => {
                try {
                    const dbData = await Videogame.findAll({
                        include: {
                            model: Genre,
                            atributte: ['name'],
                            through: {
                                atributtes: [],
                            }
                        }
                    })
                    return dbData;
                } catch (error) {
                    console.log({error: error.message})
                }
            }
        if (id) {
            const dbGames = await detailDb();
            const idGameDb = dbGames.find((game) => game.id === id);
            if(idGameDb) return res.status(200).send(idGameDb);
        }
            const gameApi = await getDetailGame(id);
			return res.status(200).send(gameApi);
    } catch(error){
        res.status(404).send('Juego no encontrado')
    }
});

module.exports = router;