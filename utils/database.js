import mongoose from 'mongoose';

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true);
    var isConnected  = false;

    if(isConnected){
        console.log("Db is already conneted");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt"
        })

        isConnected = true;
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error);
    }
}
