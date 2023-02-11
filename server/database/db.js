//mongodb+srv://user:user@todomern.qrtdqhc.mongodb.net/?retryWrites=true&w=majority

import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

const Connection = () => {
  const MONGO_DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-mern.vtv6cru.mongodb.net/?retryWrites=true&w=majority`;
  

  mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('Database Connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Database Dis-connected');
  });
  mongoose.connection.on('error', () => {
    console.log("Database can't be connected,", error.message);
  });
};

export default Connection;
