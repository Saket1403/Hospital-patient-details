const mongoose = require("mongoose");
const validator = require("validator");

const hospitalSchema = new mongoose.Schema({
    Hospital_id:{type:Number},
    Patient_Name:{type:String},
    Patient_Id:{type:String},
    Age:{type:Number},
    Adhar_Number:{type:Number},
    Date_of_admission:{type:Date},
    Admission_detail:{type:String},
    Discharge_Date:{type:Date},
    Patient_Status:{type:String}

}, {collection:"PatientDetails"})

const hospitalpatientdetails = new mongoose.model("PatientDetails" ,hospitalSchema);
module.exports = hospitalpatientdetails;