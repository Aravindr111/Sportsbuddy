const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const admin = new mongoose.model('Admin', adminSchema);
module.exports=admin;