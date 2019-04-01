import { Router } from 'express'
import { addDept, getDept, getMany, updateDept, deleteDept } from './department.controller'


const router = Router()

router
    .route('/')
    .get(getMany)
    .put(addDept)

router
    .route('/:id')
    .get(getDept)
    .post(updateDept)
    .delete(deleteDept)

export default router