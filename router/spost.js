const express = require('express')
const router = express.Router()
let userController = require('../controller/spost')


router.post('/addstudent', (req, res) => {
    userController.addstudent(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.post('/addteacher', (req, res) => {
    userController.addteacher(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.post('/addstaff', (req, res) => {
    userController.addstaff(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.post('/addclassroom', (req, res) => {
    userController.addclassroom(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

module.exports = router