import { Router } from 'express'
import controllers, { getTeachers } from './teacher.controller'

const router = Router()

router
    .route('/')
    .get(getTeachers)
    .put(controllers.createOne)

router
    .route('/:id')
    .get(controllers.getOne)
    .post(controllers.updateOne)
    .delete(controllers.removeOne)

export default router