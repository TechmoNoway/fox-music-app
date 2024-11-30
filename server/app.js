const express = require('express');
const app = express();
require('dotenv/config');

const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Hi there!');
});

// user authentication route
const userRoute = require('./routes/auth');
app.use('/api/users/', userRoute);

// Artist Routes
const artistRoutes = require('./routes/artist');
app.use('/api/artists', artistRoutes);

// Album Routes
const albumRoutes = require('./routes/albums');
app.use('/api/albums', albumRoutes);

// Song Routes
const songRoutes = require('./routes/songs');
app.use('/api/songs', songRoutes);

mongoose.connect(process.env.DB_STRING);
mongoose.connection
    .once('open', () => {
        console.log('Connected!');
    })
    .on('error', (error) => {
        console.log(`ERROR : ${error}`);
    });

app.listen(4000, () => console.log('Listen to port 4000'));
