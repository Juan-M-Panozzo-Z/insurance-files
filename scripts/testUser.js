import mongoose from 'mongoose';
import User from '../src/models/User.js';

const MONGODB_URI = 'mongodb+srv://jmpz94:residentEvil4Remake@cluster0.azbvkbq.mongodb.net/insurance-files';

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Si quieres propagar el error y manejarlo en otro lugar
  }
};

const createTestUser = async () => {
  try {
    await dbConnect();

    const testUser = {
      email: 'jmpz.94@gmail.com',
      password: '34584024',
    };

    await User.create(testUser);
    console.log('Test user created');
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

createTestUser();
