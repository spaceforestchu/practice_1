var mongoose = require('mongoose')

var ServiceSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  price: {type: Number, default: ''},
  profile: {type: mongoose.Schema.Types.Mixed, default:{}},
  timestamp: {type:Date, default: Date.now}
})

ServiceSchema.methods.summary = function(){
  var summary = {
    title: this.title,
    description: this.description,
    price: this.price,
    timestamp: this.timestamp,
    id: this._id
  }

  return summary
}


module.exports = mongoose.model('ServiceSchema', ServiceSchema)
