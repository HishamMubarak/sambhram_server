import { Router } from 'express'
import { getDept, getMany, updateDept, deleteDept } from './department.controller'


const router = Router()

router
    .route('/')
    .get(getMany)
    // .put(controllers.createOne)

router
    .route('/:id')
    .get(getDept)
    .post(updateDept)
    .delete(deleteDept)

export default router