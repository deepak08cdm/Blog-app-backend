const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());


app.listen(process.env.PORT ||port, () => {
  console.log(`Server running on port ${port}`)
});