import { createLogger, format, transports } from 'winston'
import { APP_NAME } from '../config/Settings'

const {
  combine, timestamp, label, printf
} = format

const myFormat = printf((info, opt) => `${info.timestamp}|${info.label}|${info.level}|${info.message}`)

const Logger = createLogger({
  format: combine(
    label({ label: APP_NAME }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    myFormat
  ),
  transports: [
    new transports.Console({
      level: 'info',
      exactLevel: true
    }),
    new transports.Console({
      level: 'error',
      exactLevel: true
    })
  ]
})

module.exports = Logger
