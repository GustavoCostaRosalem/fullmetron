const express = require('express')
const router = express.Router()

const userController = require('../controllers/usercontrolers')

// rotas 
router.post('/',userController.createUser)
router.get('/',userController.getAllUsers)
router.get('/',userController.getUserById)
router.get('/', userController.updateUser)
router.delete('/',userController.deleteUser)

module.exports = router