import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const BatchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: ObjectId, required: true, ref: 'department' },
    course: { type: ObjectId, required: true, ref: 'course' },
}, { versionKey: false })

export const Batch = mongoose.model('batch', BatchSchema, 'batches')