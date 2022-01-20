// IMPORTS that we need
const express = require('express')
const recipesRouter = require('./recipes/recipes-router')

//Server
const server = express()

// Things that the server needs to WORK
server.use(express.json())

// PLUG-IN the router
server.use('api/recipes', recipesRouter)

// DON'T FORGET TO EXPOSE THER SERVER
module.exports = server