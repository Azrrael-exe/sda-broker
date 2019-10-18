import express from 'express'
import bodyParser from 'body-parser'

import resHandler from './utils/ResHandler'
import settings from './config/Settings'
import mqttServer from './broker/broker'
import Logger from './utils/Logger'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const api = require('./routes/Api')

app.use(settings.BASE_PATH, api)
app.use(resHandler.susscess)
app.use(resHandler.error)

const port = settings.PORT || 3000
const mqttPort = settings.MQTT_PORT || 1883

app.listen(port, () => {
  Logger.info(`HTTP Server running on port: ${settings.PORT}`)
})

mqttServer.listen(mqttPort, () => {
  Logger.info(`MQTT Server running on port: ${settings.MQTT_PORT}`)
})

module.exports = app
