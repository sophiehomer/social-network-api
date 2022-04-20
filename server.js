const express = require('express');
const req = require('express/lib/request');
const db = require('./db/mongoose');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});

