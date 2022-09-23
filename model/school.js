    const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    rollno: {
        unique: true,
        type: Number,
        required: true
    },
    name:{
        fname:String,
        lname:String,
        
    },
    class:{
        type:String,
        required:true
    },

})
studentSchema.virtual('name.full')
    .get(function () {
        return this.name.fname + '&' + this.name.lalnamet;
    })
const teacherSchema = new mongoose.Schema({
    empid: {
        unique: true,
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required:true
    }

})
const staffSchema = new mongoose.Schema({
    staffid: {
        unique: true,
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    work:{
        type:String,
        required: true
    }

})
const classSchema = new mongoose.Schema({
    roomno: {
        unique: true,
        type: Number,
        required: true
    },
    floor:{
        type:String,
        required: true
    },
})

const StudentModel = mongoose.model('student', studentSchema)
const TeacherModel = mongoose.model('teacher', teacherSchema)
const StaffModel = mongoose.model('staff', staffSchema)
const ClassModel = mongoose.model('class', classSchema)

module.exports = {StudentModel,TeacherModel,StaffModel,ClassModel}