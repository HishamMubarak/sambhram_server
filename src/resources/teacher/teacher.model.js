import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const TeacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: ObjectId, required: true, ref: 'department' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roleId: { type: Number, required: true, default: 3 } // 2:HOD, 3:Teacher, 
}, { versionKey: false })

export const Teacher = mongoose.model('teacher', TeacherSchema, 'teachers')