var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all items. */
router.get('/', function(req, res, next) {
  knex('items').select().then(items => res.json(items))
});

/* GET one items. */
router.get('/:id', function(req, res){
  knex('items').select().where('id', req.params.id).then(item => res.json(item))
});

/* DELETE one item. */
router.delete('/remove/:id', function(req, res){
  knex('items').del().where('id', req.params.id).then(()=>{
    knex('items').select().then(items => res.json(items))
  });
});

/* ADD one item. */
router.post('/add', function(req, res){
  knex('items').insert(req.body).then(()=>{
    knex('items').select().then(items => res.json(items))
  });
});

/* EDIT one item */
router.patch('/edit/:id', function(req, res) {
  knex('items').update(req.body).where('id', req.params.id).then(function() {
    knex('items').select().then(items => res.json(items))
  });
});



module.exports = router;
