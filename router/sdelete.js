const express = require('express')
const router = express.Router()
let userController = require('../controller/sdelete')


router.delete('/deletestudent', (req, res) => {
    userController.deletestudent(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.delete('/deleteteacher', (req, res) => {
    userController.deleteteacher(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.delete('/deletestaff', (req, res) => {
    userController.deletestaff(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.delete('/deleteclassroom', (req, res) => {
    userController.deleteclassroom(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

module.exports = router