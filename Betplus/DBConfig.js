import mongoose from "mongoose";


const connectDB =  async () => {
    try{
        await mongoose.connect(
          "mongodb+srv://robert:ogunbajo@cluster0.evcch.mongodb.net/?retryWrites=true&w=majority", 
             {
               useNewUrlParser: true,
               useUnifiedTopology: true
             }
           );
    }catch(err){
        console.log(err.message);
    }
    
}
export default connectDB;