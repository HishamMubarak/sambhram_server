import { crudControllers } from '../../utils/crud'
import { Notification } from './notification.model'
import { getMany, createOne, getOne, updateOne, removeOne } from '../../utils/crud'

export const getAll = getMany(Notification)
export const deleteNotification = removeOne(Notification)

export const sendNotification = async (req, res) => {
    try {
        const newNotification = await Notification.create(req.body)

        if (!newNotification) {
            return res.status(400).json({ message: "Some error occurred" })
        }

        return res.status(200).json(newNotification)

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "DB Error sending notification" })
    }
}

export const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find(req.body).sort({ _id:-1 })
        return res.status(200).json(notifications)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "DB Error getting notification" })
    }
}

export default crudControllers(Notification)