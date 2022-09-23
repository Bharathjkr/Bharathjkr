const express = require('express')
let {StudentModel,TeacherModel,StaffModel,ClassModel}  = require('../model/school')

let deletestudent = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await StudentModel.deleteOne({
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
let deleteteacher = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let teacher = await TeacherModel.deleteOne({
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
let deletestaff = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let staff = await StaffModel.deleteOne({
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
let deleteclassroom = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                    
            let classroom = await ClassModel.deleteOne({
                floor: req.body.floor
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
    deletestudent,
    deleteteacher,
    deletestaff,
    deleteclassroom
}