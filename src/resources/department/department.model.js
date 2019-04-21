import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true, default: true }
}, { versionKey: false })

export const Department = mongoose.model('department', DepartmentSchema, 'departments')