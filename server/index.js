require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${
                process.env.DB_USERNAME
            }:${1}@learn-mern.7lmbg.mongodb.net/learn-mern?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        );
        console.log('MongoDB connect');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));