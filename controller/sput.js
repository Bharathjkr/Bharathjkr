const express = require('express')
let {StudentModel,TeacherModel,StaffModel,ClassModel}  = require('../model/school')

let updatestudent = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await StudentModel.updateOne({
                name:req.body.name
            })
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
let updateteacher = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let teacher = await TeacherModel.updateMany({
                empid: req.body.empid,
                name:req.body.name,
                subject:req.body.subject
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
let updatestaff = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let staff = await StaffModel.updateOne({
                work: req.body.work
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
let updateclassroom = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                    
            let classroom = await ClassModel.updateOne({
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
    updatestudent,
    updateteacher,
    updatestaff,
    updateclassroom
}