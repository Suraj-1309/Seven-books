import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`)
        console.log(`\n MONGODB is connected successfully from 'db/connectDB.js' !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log(`\n MONGODB failed to  unsuccessfully from 'db/connectDB.js' !! DB HOST: ${error}`);
        process.exit(1);
    }
}

export default connectDB;