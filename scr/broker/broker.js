import aedes from 'aedes'
import handlers from './handlers'

const broker = new aedes.Server()

broker.on('client', handlers.onClientConnect)
broker.on('clientDisconnect', handlers.onClientDisconnect)
broker.on('publish', handlers.onPublish)
broker.on('subscribe', handlers.onSubscribe)

broker.authorizeSubscribe = handlers.authSubscribe
broker.authorizePublish = handlers.authPublish
broker.authorize = handlers.authLogin

const mqttServer = require('net').createServer(broker.handle)

module.exports = mqttServer
