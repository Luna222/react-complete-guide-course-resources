const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8080; //React runs on port 3000 by default

app.use(cors());

app.get('/weather', (req, res) => {
  const { city } = req.query;
  const API_KEY = 'ca0ff2138a864e1fb2090905242402';
  const endpointUrlByCityName = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  fetch(endpointUrlByCityName)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

//start the server and have it listen for requests on a specific port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
📚
https://dev.to/techcheck/creating-a-react-node-and-express-app-1ieg
*/
