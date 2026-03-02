import mongoose, {mongo} from 'mongoose';


async function dbConnect() {
    await mongoose.connect(process.env.DB_CONECTION_STRING)
    return mongoose.connection
}

export default dbConnect;

