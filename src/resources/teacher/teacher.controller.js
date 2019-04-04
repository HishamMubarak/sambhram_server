import { crudControllers } from '../../utils/crud'
import { Teacher } from './teacher.model'

export const getTeachers = async (req, res) => {
    try {
        const Teachers = await Teacher.find({}).populate('department')
        return res.status(200).json(Teachers)
    } catch (e) {
        return res.status(500).json({ message: "DB Error getting teachers" })
    }
}

export const teacherLogin = async (req, res) => {

    const { email, password } = req.body

    if(!email || !password) {
        return res.status(409).json({ message:"Email and password required" })
    }

    try {
        const teacher = await Teacher.findOne({ email, password })
        
        if(!teacher) {
            return res.status(400).json({ message:"Teacher not found" }) 
        }

        return res.status(200).json(teacher)

    } catch (e) {
        console.error(e)
        return res.status(500).json({ message:"DB error finding teacher" })
    }
}

export default crudControllers(Teacher)