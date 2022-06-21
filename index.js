const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || 2000, () => {
  console.log("Server is running.....");
});