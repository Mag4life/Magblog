const router = require('express').Router()

const {signup, login} = require('../controllers/auth')


router.post('/api/auth/signup', signup)
router.post('/api/auth/login', login)


module.exports = router