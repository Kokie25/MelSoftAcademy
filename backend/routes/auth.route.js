const express = require('express')
const {authRegister, authLogout, authLogin} = require('../controllers/auth.controller')
const { authenticate } = require('../middlewares')

const app = express.Router()

app.post('/register', authRegister)

app.post('/login', authLogin);

app.post('/logout', authLogout)

module.exports = app