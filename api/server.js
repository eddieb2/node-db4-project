const express = require('express');
const server = express();

server.use(express.json());

const Recipes = require('../recipes/recipes-model');

server.get('/', (req, res) => {
  res.send(`<h1>SERVER IS WORKING</h1>`);
});

server.get('/api/recipes', (req, res) => {
  Recipes.getRecipes()
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  Recipes.getById(id)
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.get('/api/recipes/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((response) => {
      res.status(200).json({ shopping_list: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.get('/api/recipes/:id/instructions', (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = server;
