import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
// import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'

import batchRouter from './resources/batch/batch.router'
import courseRouter from './resources/course/course.router'
import departmentRouter from './resources/department/department.router'
import notificationRouter from './resources/notification/notification.router'
import studentRouter from './resources/student/student.router'
import subjectRouter from './resources/subject/subject.router'
import teacherRouter from './resources/teacher/teacher.router'

export const app = express()
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static('public'));

// app.post('/signup', signup)
// app.post('/signin', signin)
// app.use('/api', protect)

app.use('/api/batch', batchRouter)
app.use('/api/course', courseRouter)
app.use('/api/department', departmentRouter)
app.use('/api/notification', notificationRouter)
app.use('/api/student', studentRouter)
app.use('/api/subject', subjectRouter)
app.use('/api/teacher', teacherRouter)

var originsWhitelist = ['http://localhost:3000']; //React Dashboard URL
var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}
app.use(cors(corsOptions));


export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
