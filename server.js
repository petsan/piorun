'use strict'
require('dotenv').config();

const express = require('express');
const superagent = require('superagent');

require('ejs');

// const pg = require('pg');
// const client = new pg.Client(process.env.DATABASE_URL);
// client.on('error', err => console.error(err));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', homeRoute);
app.get('/aboutus', aboutusRoute)
app.get('/contact', contactRoute)
app.get('/competencies', competenciesRoute)
app.get('/cases', casesRoute)

function homeRoute(request, response) {
    response.status(200).render('./index.ejs')
}

function aboutusRoute(request, response) {
    response.status(200).render('./aboutus.ejs')
}

function casesRoute(request, response) {
    response.status(200).render('./cases.ejs')
}

function contactRoute(request, response) {
    response.status(200).render('./contact.ejs')
}

function competenciesRoute(request, response) {
    response.status(200).render('./competencies.ejs')
}

function errorCatch(err) {
    console.error(err);
}

function errorRoute(request, response) {
    console.log('Console error message');
    response.status(404).send('Browser error message, you have been 404d!')
}

// client.connect()
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`listening on ${PORT}`);
//         })
//     }).catch(errorCatch);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
