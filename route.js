const express = require('express')
const router = express.Router()
let schoolpRouter = require('./router/spost')
let schoolgRouter = require('./router/sget')
let schoolpuRouter = require('./router/sput')
let schooldRouter = require('./router/sdelete')


router.use('/school', schoolpRouter,schoolgRouter,schoolpuRouter,schooldRouter)
router.use('/p', schoolpRouter)
router.use('/g',schoolgRouter)

module.exports = router