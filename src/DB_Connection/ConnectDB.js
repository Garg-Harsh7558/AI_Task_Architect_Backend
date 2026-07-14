import mongoose from "mongoose"

async function ConnectDB(){
    try{
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    }catch(error){
        console.log("Error connecting MongoDB "+ error)
    }
}

export default ConnectDB;


