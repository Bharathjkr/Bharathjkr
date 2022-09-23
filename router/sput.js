const express = require('express')
const router = express.Router()
let userController = require('../controller/sput')


router.put('/updatestudent', (req, res) => {
    userController.updatestudent(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.put('/updateteacher', (req, res) => {
    userController.updateteacher(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.put('/updatestaff', (req, res) => {
    userController.updatestaff(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.put('/updateclassroom', (req, res) => {
    userController.updateclassroom(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

module.exports = router