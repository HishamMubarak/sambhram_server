import { Course } from './course.model'
import { getOne, updateOne, removeOne, getMany } from '../../utils/crud'
import { Types } from 'mongoose'
export const getCourse = async (req, res) => {
    const course = await Course.aggregate(
        [
            { $match: { _id: Types.ObjectId(req.params.id) } },
            {
                $lookup: {
                    from: "subjects",
                    localField: "_id",
                    foreignField: "course",
                    as: "subjects"
                }
            }
        ]
    )

    if (!course) {
        return res.status(400).json({ message: "Courses not found" })
    }

    return res.status(200).json(course)

}

export const create = async (req, res) => {
    if (!req.body.department && !req.body.name) {
        return res.status(400).send({ message: "Course Name required" })
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