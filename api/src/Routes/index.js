const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const games = require('./games');
const gameDetail = require('./gameDetail');
const genres = require('./genres');
const error = require('./error');


router.use('/videogames', games);
router.use('/videogame', gameDetail);
router.use('/genres', genres)
router.use('*', error)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

