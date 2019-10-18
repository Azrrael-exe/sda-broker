import { APP_NAME, APP_VERSION, DEPLOYED_AT } from '../config/Settings'

module.exports = {
  status: (req, res, next) => {
    res.payload = {
      app_version: APP_VERSION,
      app_name: APP_NAME,
      deployed_at: DEPLOYED_AT
    }
    return next()
  }
}
