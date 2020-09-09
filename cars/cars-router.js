const express = require('express');

const db = require('../data/connection.js');

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json({data: cars})
        })
        .catch(err => {
            res.status(500).json({error: error})
        })
});

router.post('/', (req, res) => {
    db('cars')
    .insert(req.body)
    .then(car => {
        res.status(201).json({data: car})
    })
    .catch(err => {
        res.status(500).json({error: error.message})
    })
});

module.exports = router;