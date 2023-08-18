// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8083;
// Connecting with mongo db
mongoose.connect("mongodb+srv://flaskpython:flaskpython@cluster0.jfbx4.mongodb.net/flask?retryWrites=true&w=majority").then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// app.use(requireHTTPS);
app.use(express.static('./dist/ethereum-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ethereum-test/'}),
);

  app.listen(PORT, () => {
    console.log(`Angular DApp running on port ${PORT}...`);
  });
