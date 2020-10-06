const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   isAdmin: {
      type: Number
   },
   cart: {
      type: Schema.Types.Mixed,
      default: {}
   },
   wishlist: {
      type: Schema.Types.Mixed,
      default: {}
   },
   orders: {
      type: Schema.Types.Mixed,
      default: {}
   }
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User);