import { Router } from 'express'
import { create, getCourses, updateCourse, removeCourse } from './course.controller'

const router = Router()

router
    .route('/')
    .get(getCourses)
    .put(create)

router
    .route('/:id')
    // .get(controllers.getOne)
    .post(updateCourse)
    .delete(removeCourse)

export default router