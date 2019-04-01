import { getMany, getOne, createOne, updateOne, removeOne } from '../../utils/crud'
import { Batch } from './batch.model'
import { Student } from '../student/student.model'
import { Types } from 'mongoose'

export const addBatch = createOne(Batch)

export const getOneBatch = async (req, res) => {
    if(!req.params.id) {
        return res.status(400).json({ message:"batchId required" })
    }

    try {
    
        const batchData = await Batch.aggregate([
            { $match: { _id:Types.ObjectId(req.params.id) }},
            {
                $lookup: {
                    from: "courses",
                    localField:"course",
                    foreignField:"_id",
                    as:"course"
                }
            },
            {
                $lookup: {
                    from: "departments",
                    localField:"department",
                    foreignField:"_id",
                    as:"department"
                }
            }
        ])
    
        if(!batchData) {
            return res.status(400).json({ message:"No batch foudn with provided batchId" })
        }

        const students = await Student.find({ batch: Types.ObjectId(req.params.id) })
        
        return res.status(200).json({ batchData, students })

    } catch (e) {
        return res.status(500).json({ message:"DB Error aggreagating batch data" })
    }
    
}

export const editBatch = updateOne(Batch)

export const deleteBatch = removeOne(Batch)

export const getManyBatch =  getMany(Batch)