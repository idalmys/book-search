const express= require("express")
const mongoose= require("mongoose")

//Settings
const app=express();
const PORT=process.env.PORT || 3001;

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Routes
app.use("/api/books",require("./routes/apiBooks"));

const MONGODB_URI=process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,})
    {
        console.log("DB Connected");
    }
    
//Server
app.listen(PORT,()=>{
    console.log("Port on " + PORT)
})
