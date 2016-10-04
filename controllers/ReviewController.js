var Review = require('../models/Review')
var Promise = require('bluebird')

module.exports = {
  get: function(params){
    return new Promise(function(resolve, reject){
      Review.find(params, function(err, reviews){
        if ( err ) {
          reject(err)
          return
        }
        var list = []
        for(var i = 0; i < reviews.length; i++) {
          var review = services[i]
          list.push(review.summary())
        }
        resolve(list)
      })
    })
  },
  getById: function(id){
    return new Promise(function(resolve, reject){
      Review.findById(id, function(err, review ){
        if (err) {
          reject(err)
          return
        }
        resolve(review)
      })
    })
  },
  create: function(params){
    return new Promise(function(resolve, reject){
      Review.create(params, function(err, review){
        if (err) {
          reject(err)
          return
        }
        resolve(review)
      })
    })
  },
  update: function(params){
    return new Promise(function(resolve, reject){
      Review.findByIdAndUpdate(params, req.body, {new:true}, function(err, review){
        if(err){
          reject(err)
          return
        }
        resolve(review)
      })
    })
  }

}
