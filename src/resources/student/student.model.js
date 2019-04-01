import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const StudentSchema = new mongoose.Schema({
    name: { type:String, required:true },
    batch: { type:ObjectId, required:true, ref:'batch' },
    course: { type:ObjectId, required:true, ref:'course' },
    department: { type:ObjectId, required:true, ref:'department' },
    mobile: { type:String, required:true },
    mail:{ type:String, required:true },
    address: { type:String, required:true },
    registerNumber: { type:String, required:true },
}, { versionKey:false })

export const Student = mongoose.model('student', StudentSchema, 'students')