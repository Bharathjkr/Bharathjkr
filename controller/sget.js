const express = require('express')
let {StudentModel,TeacherModel,StaffModel,ClassModel}  = require('../model/school')

let fetchstudent = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await StudentModel.find()
                .catch(e => reject({message: e.message}))

            resolve({
                student,
                mesage: "Success"
            })  
        } catch (e) {
            reject({
                mesage: e.message
            })
        }
    })
}
let fetchteacher = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let teacher = await TeacherModel.findOne({
                empid: req.body.empid
            })

                .catch(e => reject({message: e.message}))

            resolve({
                teacher,
                mesage: "Success"
            })  
        } catch (e) {
            reject({
                mesage: e.message
            })
        }
    })
}
let fetchstaff = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let staff = await StaffModel.findOne({
                name: req.body.name
            })
                    
            resolve({
                staff,
                mesage: "Success"
            })  
        } catch (e) {
            reject({
                mesage: e.message
            })
        }
    })
}
let fetchclassroom = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                    
            let classroom = await ClassModel.find({
                roomno: req.body.roomno
            })       
                .catch(e => reject({message: e.message}))

            resolve({
                classroom,
                mesage: "Success"
            })  
        } catch (e) {
            reject({
                mesage: e.message
            })
        }
    })
}


module.exports = {
    fetchstudent,
    fetchteacher,
    fetchstaff,
    fetchclassroom
}