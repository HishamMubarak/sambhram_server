import { Router } from 'express'
import { create, getCourse, getCourses, updateCourse, removeCourse } from './course.controller'

const router = Router()

router
    .route('/')
    .get(getCourses)
    .put(create)

router
    .route('/:id')
    .get(getCourse)
    .post(updateCourse)
    .delete(removeCourse)

export default router