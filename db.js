import mongoose from "mongoose";
const connect = async() => {
    try{
            await mongoose.connect(process.env.MONGO_URL)
            console.log("connected sux");
        
    }
    catch(error){
        throw new Error("error")
    }
}
export default connect;