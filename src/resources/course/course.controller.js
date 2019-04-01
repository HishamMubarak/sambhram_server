import { Course } from './course.model'
import { updateOne, removeOne, getMany } from '../../utils/crud'

export const create = async (req, res) => {
    if(!req.body.department && !req.body.name) {
        return res.status(400).send({ message:"Course Name required" })
    }

    try {
        let course = await Course.create(req.body)
        return res.status(200).json(course)
    } catch (e) {
        console.log(e)
        return res.status(500).end()
    }
}

export const getCourses = getMany(Course)

export const updateCourse = updateOne(Course)

export const removeCourse = removeOne(Course)