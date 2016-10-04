var Service = require('../models/Service')
var Promise = require('bluebird')

module.exports = {
  get: function(params){
    return new Promise(function(resolve, reject){
      Service.find(params, function(err, services){
        if ( err ) {
          reject(err)
          return
        }

        resolve(services)
      })
    })
  },
  getById: function(id){
    return new Promise(function(resolve, reject){
      Service.findById(id, function(err, service ){
        if (err) {
          reject(err)
          return
        }
        resolve(service)
      })
    })
  },
  create: function(params){
    return new Promise(function(resolve, reject){
      Service.create(params, function(err, service){
        if (err) {
          reject(err)
          return
        }
        var list = []
        for(var i = 0; i < services.length; i++) {
          var service = services[i]
          list.push(service.summary())
        }
        resolve(list)
      })
    })
  },
  update: function(params){
    return new Promise(function(resolve, reject){
      Service.findByIdAndUpdate(params, req.body, {new:true}, function(err, result){
        if(err){
          reject(err)
          return
        }
        resolve(result)
      })
    })
  }

}
