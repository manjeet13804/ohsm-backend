const express = require("express");
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
mongoose.connect("mongodb+srv://root:10xacademy@cluster0.kzvn5vw.mongodb.net/?retryWrites=true&w=majority")
.then(console.log("successfully connected to db"))
.catch(err=>console.log(err))

const userRoutes = require("./routes/user");

const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use("/api/user", userRoutes)
app.use(cors({
  origin: "*"
}))


app.listen(5000, () => console.log("The server is up at 5000 port"));

