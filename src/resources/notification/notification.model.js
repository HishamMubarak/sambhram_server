import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

const NotificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    departmentId: { type: ObjectId, required: false },
    courseId: { type: ObjectId, required: false },
    batchId: { type: ObjectId, required: false },
}, { versionKey: false })

export const Notification = mongoose.model('notification', NotificationSchema, 'notification')