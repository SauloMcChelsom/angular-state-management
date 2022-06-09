const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Apps'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Apps'}),
);
app.listen(process.env.PORT || 8080); 

