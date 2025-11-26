import mongoose from "mongoose";

export default async function connectDB(uri){
  if(!uri) throw new Error("MONGO_URI not provided");
  await mongoose.connect(uri);
  console.log("✨ MongoDB conectado correctamente");
}












