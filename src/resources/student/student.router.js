import { Router } from 'express'
import controllers from './student.controller'

const router = Router()

router
    .route('/')
    .get(controllers.getOne)
    .put(controllers.createOne)

router
    .route('/:id')
    .get(controllers.getOne)
    .post(controllers.updateOne)
    .delete(controllers.removeOne)

export default router