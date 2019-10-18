import Logger from '../utils/Logger'

const onClientConnect = (client) => {
  Logger.info(`Client with ID: ${client.id} is now in our Trap!`)
}

const onClientDisconnect = (client) => {
  Logger.info(`Client with ID: ${client.id} is leaving! Nooooo!!`)
}

const onPublish = (packet, client) => {
  const topic = packet.topic
  if (topic.split('/')[0] !== '$SYS') {
    Logger.info(`Client with ID: ${client.id} is sending Messages on topic ${topic}!`)
  }
}

const onSubscribe = (subscriptions, client) => {
  const topics = []
  for (var index = 0; index < subscriptions.length; index++) {
    topics.push(subscriptions[index].topic)
  }
  Logger.info(`Client with ID: ${client.id} is Subscribed to ${topics}!`)
}

const authSubscribe = (client, sub, callback) => {
  if (client.id !== 'David Toro') {
    callback(null, sub)
  }
}

const authPublish = (client, packet, callback) => {
  callback(null, true)
}

const authLogin = (client, username, password, callback) => {
  callback(null, true)
}

module.exports = {
  onClientConnect,
  onClientDisconnect,
  onPublish,
  onSubscribe,
  authPublish,
  authSubscribe,
  authLogin
}
