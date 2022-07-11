const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(cors({ origin: '*' }));

const CLIENT_ROUTES = ['/', '/about', '/get-started', '/services', '/patient-experiences', '/location', '/nondiscrimination-disclosure-statement'];
app.use((req, res, next) => {
    if (CLIENT_ROUTES.includes(req.path)) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    } else {
        next();
    }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});