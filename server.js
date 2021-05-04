// import sql database...
const Database = require('./database.js');
const database = new Database();

// connect express library...
const express = require('express');

// connect port outputs...
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware...
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
// API entry point or employee (example)
app.get('/employee/all', async (req, res) => {
    try {
        let employee = await database.runQuery("SELECT * FROM employee;");
        res.status(200).json(employee);
    } catch(error) {
        res.status(500).json(error);
    }
});

// express function testing...
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// Default response for 404 (Not Found)...
app.use((req, res) => {
    res.status(404).end();
});

// express port listener...
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
