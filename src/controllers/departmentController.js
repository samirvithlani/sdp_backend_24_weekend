const departmentSchema = require('../models/departmentModel');

const createDepartment = async (req, res) => {
    try{
        const createdDepartment = await departmentSchema.create(req.body);
        res.status(201).json({
            message: "Department created successfully",
            data: createdDepartment
        })
    }
    catch(err){
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
const getDepartments = async (req, res) => {
    try{

        const departments = await departmentSchema.find({status:"active"});

    }catch(err){
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
module.exports = {
    createDepartment
}