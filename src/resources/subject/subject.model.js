import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const SubjectSchema = new mongoose.Schema({
    name: { type:String, required:true },
    course: { type:ObjectId, required:true, ref:'course' },
    department: { type:ObjectId, required:true, ref:'department' },
}, { versionKey:false })

export const Subject = mongoose.model('subject', SubjectSchema, 'subjects')