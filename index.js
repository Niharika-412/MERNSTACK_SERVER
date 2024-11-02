const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample data for faculty and students
const facultyAttendance = [
    { name: 'niha', subject: 'Mathematics', attendance: '95%' },
    { name: 'honey', subject: 'Physics', attendance: '88%' },
    { name: 'bharu', subject: 'Chemistry', attendance: '92%' },
    { name: 'Bhargavi', subject: 'Biology', attendance: '90%' },
    { name: 'Niharika', subject: 'Computer Science', attendance: '85%' }
];

const studentAttendance = [
    { name: 'Sravanthi', grade: 'A', attendance: '90%' },
    { name: 'Jeevani', grade: 'B', attendance: '85%' },
    { name: 'Jayathi', grade: 'A+', attendance: '95%' },
    { name: 'Praveen', grade: 'B+', attendance: '88%' }
];

// Home route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route for faculty attendance
app.get('/faculty-attendance', (req, res) => {
    res.json(facultyAttendance);
});

// Route for student attendance
app.get('/student-attendance', (req, res) => {
    res.json(studentAttendance);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
