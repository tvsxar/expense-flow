import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1333;

connectDB();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Expense Flow Backend is running');
});

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
})