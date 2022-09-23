const express = require('express')
let {StudentModel,TeacherModel,StaffModel,ClassModel}  = require('../model/school')

let addstudent = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await StudentModel.create({
                rollno: req.body.rollno,
                name:req.body.name,
                class:req.body.class
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
let addteacher = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let teacher = await TeacherModel.create({
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
let addstaff = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            let staff = await StaffModel.create({
                    staffid: req.body.staffid,
                    name:req.body.name,
                    work:req.body.work
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
let addclassroom = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                    
            let classroom = await ClassModel.create({
                    roomno: req.body.roomno,
                    floor:req.body.floor
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
    addstudent,
    addteacher,
    addstaff,
    addclassroom
}