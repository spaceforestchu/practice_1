var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
  firstName: {type: String, lowercase: true, trim: true, default: ''},
  lastName: {type: String, lowercase: true, trim: true, default: ''},
  email: {type:String, lowercase: true, trim: true, default: ''},
  city: {type: String, default: ''},
  password: {type: String, default: ''},
  timestamp: {type:Date, default: Date.now}

})

ProfileSchema.methods.summary = function() {
  var summary = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    timestamp: this.timestamp,
    id: this._id,
    city: this.city
  }

  return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)
