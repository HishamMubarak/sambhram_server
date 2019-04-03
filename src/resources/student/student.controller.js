import { createOne, getOne, getMany, updateOne, removeOne } from '../../utils/crud'
import { Student } from './student.model'
import { Types } from 'mongoose'

export const addStudent = createOne(Student)

export const getStudent = async (req, res) => {
    if(!req.params.id) {
        return res.status(400).json({ message:"studentId required" })
    }

    const student = await Student.aggregate([
        { $match: { _id:Types.ObjectId(req.params.id) }},
        {
            $lookup: {
                from: "courses",
                localField:"course",
                foreignField:"_id",
                as:"course"
            }
        },
        { $unwind:"$course" },
        {
            $lookup: {
                from: "departments",
                localField:"department",
                foreignField:"_id",
                as:"department"
            }
        },
        { $unwind:"$department" },
        {
            $lookup: {
                from: "batches",
                localField:"batch",
                foreignField:"_id",
                as:"batch"
            }
        },
        { $unwind:"$batch" },
    ])

    if(!student) {
        return res.status(209).json({ message:"Student not found" })
    }

    return res.status(200).json(student[0])

}

export const getStudents = getMany(Student)
export const updateStudent = updateOne(Student)
export const removeStudent = removeOne(Student)


// export default crudControllers(Student)