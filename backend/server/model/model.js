const mongoose = require ('mongoose');
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const AddProductDB = mongoose.model('AddProductDB',schema);

module.exports=AddProductDB;
