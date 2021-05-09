const express = require('express');
const app = express();
const session = require('express-session');

const PORT = 5000 || process.env.PORT

app.use(
    session({
        secret: 'The secret key',
        resave: false,
        saveUninitialized: false
    })
);

app.get('/', (req, res) => {
    console.log(req.session);
    res.send('This is the main page');
});

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));