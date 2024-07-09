const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 8888;

// Serve static files
app.use(express.static(path.join(__dirname)));

// List of applications to check
const apps = [
    { id: 'status-emiliano', url: 'http://192.168.178.122:8888/' },
    { id: 'status-catalin', url: 'http://sito-alunno2.com' },
    { id: 'status-michele', url: 'http://192.168.178.149:5001/' },
    { id: 'status-leonardo', url: 'http://sito-alunno4.com' },
    { id: 'status-alex', url: 'http://sito-alunno5.com' },
    { id: 'status-federico', url: 'http://sito-alunno6.com' },
    { id: 'status-cristiano', url: 'http://sito-alunno7.com' },
    { id: 'status-davide', url: 'http://sito-alunno8.com' },
    { id: 'status-patrizio', url: 'http://192.168.178.154:5003/' },
    { id: 'status-marco', url: 'http://192.168.178.151:3000' },
    { id: 'status-francesco', url: 'http://192.168.178.155:5000/' },
    { id: 'status-damiano', url: 'http://sito-alunno12.com' }
];

// API endpoint to get the status of applications
app.get('/status', async (req, res) => {
    const statuses = await Promise.all(apps.map(async (app) => {
        try {
            await axios.head(app.url);
            return { id: app.id, status: 'online' };
        } catch (error) {
            return { id: app.id, status: 'offline' };
        }
    }));
    res.json(statuses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
