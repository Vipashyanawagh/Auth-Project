//q9xa76BhIhg6U2Is password for mongodb atlas

//mongodb+srv://vipashyanawagh14_db_user:<db_password>@cluster0.92pgfdn.mongodb.net/?appName=Cluster0



const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");

const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products",ProductRouter);

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.get("/ping", (req,res) =>{
    res.send("Pong");
});



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})
