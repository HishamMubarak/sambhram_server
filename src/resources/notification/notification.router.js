import { Router } from 'express'
import { sendNotification, getNotifications } from './notification.controller'

const router = Router()

router
    .route('/')
    .post(sendNotification)

router
    .route('/get')
    .post(getNotifications)

export default router