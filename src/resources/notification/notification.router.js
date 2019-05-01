import { Router } from 'express'
import { getAll, sendNotification, getNotifications, deleteNotification } from './notification.controller'

const router = Router()

router
    .route('/')
        .get(getAll)
        .post(sendNotification)

router
    .route('/get')
    .post(getNotifications)

router
    .route('/:id')
        .delete(deleteNotification)

export default router