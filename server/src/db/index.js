import mongoose from "mongoose"
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        if(connect){
            console.log("Database Connected");
        }

    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
export default connectDb;