const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


mongoose.connect(`mongodb+srv://greg:${process.env.DB_PASS}@cluster0-8vzth.mongodb.net/mongo-exercises?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to db...'))
    .catch(err => console.error('Could not connect to db...', err));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));