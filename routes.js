const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+'/public/'))

var http = require('http');
var fs = require('fs');
var router = express.Router();

app.set('view engine', 'ejs');

const PORT=3000; 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


router.get('/kidslist', function (req, res, next) {
        connection.query('SELECT * FROM users ORDER BY id desc', function (err, rows) {
          if (err) {
            req.flash('error', err)
            res.render('profile', { data: '' })
          } else {
            res.render('profile', { data: rows })
          }
        })
      });
    
app.post('/submit', (req, res) => {
    const cfname = req.body.cfname;
    const clname = req.body.clname;
    const cdob = req.body.cdob;
    const pfname = req.body.pfname;
    const plname = req.body.plname;
    const contact_number = req.body.contact_number;
    const home_address = req.body.home_address;
    const email_address = req.body.email_address;
    
    const sql = "INSERT INTO children (cfname, clname, cdob, pfname, plname, contact_number, home_address, email_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [cfname, clname, cdob, pfname, plname, contact_number, home_address, email_address], (err, result) => {
        if (err) throw err;
        res.redirect('/teammbr.html');
        if (response.ok) {alert("Successfully Added");} else {alert("An error has occured, please contact your Admin")}
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});