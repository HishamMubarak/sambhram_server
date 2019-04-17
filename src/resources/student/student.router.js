import { Router } from 'express'
import { addStudent, getStudent, getStudents, updateStudent, removeStudent, updateSubjectData, login } from './student.controller'

const router = Router()

router
    .route('/login')
    .post(login)

router
    .route('/')
    .get(getStudents)
    .put(addStudent)

router
    .route('/:id')
    .get(getStudent)
    .post(updateStudent)
    .delete(removeStudent)

router
    .route('/:id/updateSubjectData')
        .post(updateSubjectData)

export default router