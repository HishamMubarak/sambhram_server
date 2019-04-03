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

export const updateSubjectData = async (req, res) => {

    console.log(req.body)

    try {

        const { firstInternal, secondInternal, attendancePercentage, editingSubjectId } = req.body

        let addData = { subjectId:editingSubjectId, firstInternal, secondInternal, attendancePercentage }
    
        const dataAddedStudent = await Student.findOneAndUpdate(
            {
                _id:req.params.id,
                "subjectData":{
                    $not:{
                        $elemMatch:{
                            subjectId:editingSubjectId
                        }
                    }
                }
            },
            {
                $addToSet : {
                    subjectData:addData
                }
            },
            { new:true })

        if(!dataAddedStudent) {
            const updatedStudent = await Student.findOneAndUpdate(
                { _id:req.params.id, "subjectData.subjectId":editingSubjectId },
                { $set: { "subjectData.$":addData } },
                { new:true })

            return res.status(200).json(updatedStudent)
        }
    
        return res.status(200).json(dataAddedStudent)
    } catch (e) {
        console.log(e)
        return res.status(500)
    }
}