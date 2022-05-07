import mongoose  from "mongoose";

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    fees:{
        type:mongoose.Decimal128 ,
        required:true,
        validate:(value)=> value>=5000.5
    },
    
})

const StudentModel = mongoose.model("student",studentSchema);

export default StudentModel;