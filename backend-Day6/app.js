const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
//GET, POST, PUT, DELETE
app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log(`Server started at port 3000`);
});

