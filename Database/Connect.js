import mongoose from "mongoose"
const URI = process.env.MONGO_URL
mongoose.set("strictQuery", false)
const connection =async()=>{
        await mongoose.connect(URI, (err)=>{
                if(err){
                    console.log("mongoose not connect!")
                }
                else{
                    console.log("mongoose connected!")
                }
        })
}

export default connection