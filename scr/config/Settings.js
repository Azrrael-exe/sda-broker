require('dotenv').config()

const APP_NAME = 'sda-broker'
const APP_VERSION = '1.0.0'

const {
  PORT,
  MQTT_PORT
} = process.env

const settings = {
  APP_NAME,
  APP_VERSION,
  PORT: PORT || 3000,
  MQTT_PORT: MQTT_PORT || 1883,
  BASE_PATH: `/api/${APP_NAME}`,
  DEPLOYED_AT: new Date().toISOString()
}

module.exports = settings
