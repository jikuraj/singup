const { json } = require('body-parser');
const express=require('express');
// const bodyParser=require('body-parser');
const userSchema = require("./userModel.js");

let app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var mongoose = require("mongoose");
let MONGODB_URL  = "mongodb://127.0.0.1:27017/users"
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", MONGODB_URL);
      console.log("App is running ... \n");
      console.log("Press CTRL + C to stop the process. \n");
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;

const router = express.Router()
app.use("/", router)
router.get("/", (req, res)=>{
    res.send("Get api hited")
});
let users = [];
router.post("/", (req, res)=>{
    
    userSchema.create(req.body, (err, dbData)=>{
        console.log(err, dbData);
    res.status(200).json({"message":"user created","data": dbData});

    })

    
});
app.listen(8000,()=>{
    console.log('port is running on 3000');
});




