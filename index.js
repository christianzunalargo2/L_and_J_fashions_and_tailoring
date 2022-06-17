const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(3000, function(){
  console.log("server started on port 3000");
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
