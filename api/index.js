import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Taskrouter from './routes/Task.route.js';

dotenv.config();

const PORT = process.env.PORT;  

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174'
}));

// routes 

app.use('/api/task', Taskrouter);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('Error:', error.message)
}
);    


app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})