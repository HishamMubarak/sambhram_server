import { Router } from 'express'
import { addStudent, getStudent, getStudents, updateStudent, removeStudent } from './student.controller'

const router = Router()

router
    .route('/')
    .get(getStudents)
    .put(addStudent)

router
    .route('/:id')
    .get(getStudent)
    .post(updateStudent)
    .delete(removeStudent)

export default router