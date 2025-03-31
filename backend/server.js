import express from "express"
import cors from "cors"




// app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})  //to request the data from the server

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://hcd_home_baker:homebakery@cluster0.kbhkkpz.mongodb.net/?