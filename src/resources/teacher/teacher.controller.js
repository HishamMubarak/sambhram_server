import { crudControllers } from '../../utils/crud'
import { Teacher } from './teacher.model'

export const getTeachers = async (req, res) => {
    try {
        const Teachers = await Teacher.find({ }).populate('department')
        return res.status(200).json(Teachers)
    } catch (e) {
        return res.status(500).json({ message:"DB Error getting teachers" })
    }
}

export default crudControllers(Teacher)