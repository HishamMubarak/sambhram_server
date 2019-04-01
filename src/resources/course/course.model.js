import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const CourseSchema = new mongoose.Schema({
    name: { type:String, required:true },
    department: { type:ObjectId, required:true, ref:'department' },
    active: { type:Boolean, required:true, default:true }
}, { versionKey:false })

export const Course = mongoose.model('course', CourseSchema, 'courses')