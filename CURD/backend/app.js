const express = require("express")
const mongoose = require("mongoose")
const BookRouter = require("./routes/routes")
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use("/books", BookRouter)

const connectToDb = async () => {
    try 
    {
        await mongoose.connect("mongodb://127.0.0.1:27017/DayTask");
        console.log("connected to db");
    }
    catch (error) 
    {
        console.log(error);
    }
}

connectToDb();

const PORT = 9091
app.listen(PORT, () => 
{
    console.log("Server running on PORT");
});