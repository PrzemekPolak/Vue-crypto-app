const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => {
});

app.get('/getData/:id', (req, res) => {
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=' + req.params.id,
        headers: {
            'X-CMC_PRO_API_KEY': process.env.VITE_API_KEY,
            'Accept': '*/*'
        }
    };

    axios(config)
        .then(function (response) {
            res.json({response: response.data})
        })


});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});