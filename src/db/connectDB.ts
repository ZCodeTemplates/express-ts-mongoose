import mongoose from 'mongoose';
import { envVariables } from '../common/consts/envVariables.consts';

export const connectDB = async () => {
    try {
        await mongoose.connect(envVariables.MONGO_URI);
        console.log('Connected to Mongodb.');
    } catch (err) {
        console.log(err);
    }
};
