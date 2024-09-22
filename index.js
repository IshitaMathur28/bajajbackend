const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '10mb' }));

// POST route
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;
    // Process data and return response
    // ...
    res.json({
        is_success: true,
        user_id: 'your_full_name_ddmmyyyy',
        email: 'your_email@college.com',
        roll_number: 'YourRollNumber',
        numbers: data.filter(item => !isNaN(item)),
        alphabets: data.filter(item => isNaN(item)),
        highest_lowercase_alphabet: [],  // Logic for lowest alphabet
        file_valid: true,  // Logic for file validation
        file_mime_type: 'application/pdf', // Example
        file_size_kb: 120 // Example
    });
});

// GET route
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
