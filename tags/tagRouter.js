const express = require("express");
const router = express.Router();
const db = require('../data/helpers/tagDb');

//'/api/tags they come here.

router.get('/', (req, res)=> {
    
    db
        .get()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({error:`Server Error ${error}`}) //Do not do this in Production
        });
})


router.get('/:id', (req, res)=> {
    const {id}=req.params;

    db
        .get(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({error:`Server Error ${error}`}) //Do not do this in Production
        });
})


module.exports = router;