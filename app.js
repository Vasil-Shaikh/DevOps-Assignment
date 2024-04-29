const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Generate dummy data endpoint
app.post('/generate', (req, res) => {
  const { fields, count } = req.body;

  if (!fields || !Array.isArray(fields) || fields.length === 0 || !count || isNaN(count)) {
    return res.status(400).json({ error: 'Invalid request. Please provide valid fields array and count.' });
  }

  const dummyData = [];

  for (let i = 0; i < count; i++) {
    const record = {};
    fields.forEach(field => {
      switch (field) {
        case 'first_name':
          record[field] = generateFirstName();
          break;
        case 'last_name':
          record[field] = generateLastName();
          break;
        case 'email':
          record[field] = generateEmail();
          break;
        case 'phone':
          record[field] = generatePhoneNumber();
          break;
        // Add more fields as needed
      }
    });
    dummyData.push(record);
  }

  res.json(dummyData);
});

// Generate a random first name
function generateFirstName() {
  // Logic to generate random first name
  return 'John';
}

// Generate a random last name
function generateLastName() {
  // Logic to generate random last name
  return 'Doe';
}

// Generate a random email
function generateEmail() {
  // Logic to generate random email
  return 'john.doe@example.com';
}

// Generate a random phone number
function generatePhoneNumber() {
  // Logic to generate random phone number
  return '123-456-7890';
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
