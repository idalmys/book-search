const mongoose= require("mongoose");
const Schema=mongoose.Schema;

const BookSchema= new Schema({
    title:{
        type:String,
        required: true
    },
    authors:[],
    description:{
        type:String,
        required:true
    },
    img:{
        type:String
        
    },
    link:{
        type:String,
        required:true
    }


});

const Book =mongoose.model("Book",BookSchema);
module.exports=Book;