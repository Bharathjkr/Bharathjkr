const express = require('express')
const router = express.Router()
let userController = require('../controller/sget')


router.get('/fetchstudent', (req, res) => {
    userController.fetchstudent(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.get('/fetchteacher', (req, res) => {
    userController.fetchteacher(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.get('/fetchstaff', (req, res) => {
    userController.fetchstaff(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

router.get('/fetchclassroom', (req, res) => {
    userController.fetchclassroom(req).then((data) => {
        res.status(200).send(data)
    }).catch(e => res.status(500).send({
        message: e.message
    }))
})

module.exports = router