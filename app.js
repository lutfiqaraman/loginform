const express = require('express');
const path    = require('path');
const router  = express.Router();

const app = express();

app.use(express.static(__dirname));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Server is running ...');
