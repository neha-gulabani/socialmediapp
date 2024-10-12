require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/userRoutes');
const storyRoutes = require('./routes/storyRoutes');
const middleware = require('./middleware/middleware')
const path = require('path');






const app = express();
app.use(express.json());
const corsOptions = {
    origin: 'https://social-z24q.vercel.app',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
console.log('here')
app.use('/auth', authRoutes);
console.log('here 2')
app.use('/api/stories', storyRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));



app.listen(5000, () => {
    console.log(`listening at port https://social-vv1i.onrender.com`);
})
