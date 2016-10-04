var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcrypt')

module.exports = {
  get: function(params){
    return new Promise(function(resolve, reject){
      Profile.find(params, function(err, profiles){
        if ( err ) {
          reject(err)
          return
        }
        var list = []
        for(var i = 0; i < profiles.length; i++) {
          var profile = profiles[i]
          list.push(profile.summary())
        }
        resolve(list)
      })
    })
  },
  getById: function(id){
    return new Promise(function(resolve, reject){
      Profile.findById(id, function(err, profile ){
        if (err) {
          reject(err)
          return
        }
        resolve(profile)
      })
    })
  },
  create: function(params){
    return new Promise(function(resolve, reject){

      params['password'] = bcrypt.hashSync(params.password, 10)

      Profile.create(params, function(err, profile){
        if (err) {
          reject(err)
          return
        }
        resolve(profile)
      })
    })
  },
  update: function(params){
    return new Promise(function(resolve, reject){
      Profile.findByIdAndUpdate(params, req.body, {new:true}, function(err, profile){
        if(err){
          reject(err)
          return
        }
        resolve(profile)
      })
    })
  }

}
