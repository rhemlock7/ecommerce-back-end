const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// TODO
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  res.send('Tag-Route GET request!')
});

// TODO
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// TODO
router.post('/', (req, res) => {
  // create a new tag
});

// TODO
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// TODO
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
