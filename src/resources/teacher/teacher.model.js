import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const TeacherSchema = new mongoose.Schema({
    name: { type:String, required:true },
    department: { type:ObjectId, required:true, ref:'department' },
    roleId:{ type:Number, required:true, default:3 } // 2:HOD, 3:Teacher, 
})

export const Teacher = mongoose.model('teacher', TeacherSchema, 'teachers')