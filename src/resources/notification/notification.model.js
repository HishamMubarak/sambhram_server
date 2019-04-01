import mongoose from 'mongoose'
// const { ObjectId } = mongoose.Types

const NotificationSchema = new mongoose.Schema({
    title: { type:String, required:true },
    description: { type:String, required:true },
}, { versionKey:false })

export const Notification = mongoose.model('notification', NotificationSchema, 'notification')