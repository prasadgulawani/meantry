const express = require('express');
const app = express();
const categoryRoute = express.Router();

// category model
let category = require('../models/Category');

// Add category
categoryRoute.route('/create').post((req, res, next) => {
  category.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All categorys
categoryRoute.route('/category/').get((req, res) => {
  category.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single category
categoryRoute.route('/read/:id').get((req, res) => {
  category.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update category
categoryRoute.route('/update/:id').put((req, res, next) => {
  category.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete category
  categoryRoute.route('/delete/:id').delete((req, res, next) => {
  category.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = categoryRoute;