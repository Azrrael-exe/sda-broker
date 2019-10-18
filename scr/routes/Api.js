import express from 'express'
import routes from '../config/Routes'
import { status } from '../controllers/Status'

const router = express.Router()

router.get(routes.STATUS, status)

module.exports = router
