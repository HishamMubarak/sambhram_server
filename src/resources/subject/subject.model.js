import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const SubjectSchema = new mongoose.Schema({
    name: { type:String, required:true },
    semester: { type:Number, required:true },
    course: { type:ObjectId, required:true, ref:'course' },
}, { versionKey:false })

export const Subject = mongoose.model('subject', SubjectSchema, 'subjects')