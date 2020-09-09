const express = require('express');

const db = require('../data/connection.js');

const router = express.Router()

router.get('/', (req, res) => {
    db('car')
        .then(cars => {
            res.status(200).json({data: cars})
        })
        .catch(error => {
            res.status(500).json({message: error})
        })
});

router.post('/', (req, res) => {
    db('car')
    .insert(req.body)
    .then(car => {
        res.status(201).json({data: car})
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
});

module.exports = router;