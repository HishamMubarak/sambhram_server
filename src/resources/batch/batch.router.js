import { Router } from 'express'
import { addBatch, getManyBatch, getOneBatch, editBatch, deleteBatch } from './batch.controller'

const router = Router()

router
    .route('/')
    .get(getManyBatch)
    .put(addBatch)

router
    .route('/:id')
    .get(getOneBatch)
    .post(editBatch)
    .delete(deleteBatch)

export default router