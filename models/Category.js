const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Category = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   subcategory: {
      type: Schema.Types.Mixed,
      default: {}
   }
}, {
   collection: 'category'
})

module.exports = mongoose.model('CAtegory', Category);