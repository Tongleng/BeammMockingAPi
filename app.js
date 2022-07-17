const express = require('express');

const jsonServer =require('json-server');
const router = jsonServer.router('db.json');

const port = process.env.PORT || 8080;

const app = express();
app.use(router);

app.listen(port, () => console.log(`Server create at port ${port}`))