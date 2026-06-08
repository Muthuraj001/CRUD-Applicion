const express = require('express');
const user = require('./simple.json');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

//display all users

app.get('/users', (req, res) => {
    res.json(user);
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});