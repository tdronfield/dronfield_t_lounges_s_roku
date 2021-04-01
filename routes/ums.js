const express = require('express');
// Express router handles incoming req and directs them to where they need to go
// Like a traffic cop
const router = express.Router();

// Import the SQL connection script
const connect = require("../config/sqlConfig");

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.post('/admin/login', (req, res) => {
    // console.log(req.body.username, req.body.password);
    connect.query(`SELECT user_id, user_admin, user_access, user_avatar FROM tbl_user WHERE user_name = "${req.body.username}"`, (err, row) => {
        if (err) throw err;

        if (row.length) {
            res.status(200).json(row[0]);
        }  else {
            res.status(404).res.json({failure: true, message: 'user not found'});
        }
    });
})

router.get('/admin/getusers', (req, res) => {
    connect.query('SELECT user_id, user_name, user_admin, user_access, user_avatar FROM tbl_user', (err, users) => {
        if (err) throw err;

        res.status(200).json(users);
    })
})

module.exports = router;