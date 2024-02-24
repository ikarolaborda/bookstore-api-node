import mongoose, { mongo } from 'mongoose';

const connection = 'mongodb://mongo:27017/bookstore';

async function database() {
    try {
        await mongoose.connect(connection);
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to database: ', error.message);
    }

    return mongoose.connection;
}

export default database