var express = require('express')
var router = express.Router()
// var ProfileController = require('../controllers/ProfileController')
// var ServiceController = require('../controllers/ServiceController')
// var ReviewController = require('../controllers/ReviewController')
// var controllers = {
//   profile: ProfileController,
//   service: ServiceController,
//   review: ReviewController
// }

var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  controller.get(req.query)
  .then(function(results){
    res.json({
      confirmation:'success',
      results: results
    })
    return
  })
  .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
  })


//   router.get('/:resource', function(req, res, next){
//   var resource = req.params.resource
//
//   Profile.find(null, function(err, profiles){
//     if(err) {
//       res.json({
//         confimration: 'error',
//         err: "Error"
//       })
//     }
//     if( resource == 'profile'){
//       res.json({
//         confimration: 'success',
//         profiles: profiles
//       })
//     }
//   })
// })
})

router.get("/:resource/:id", function(req, res, next){

  var id = req.params.id
  var resource = req.params.resource
  var controller = controllers[resource]

  controller.getById(id)
  .then(function(result){
    res.json({
      confirmation: 'success',
      message: result
    })
    return
  })
  .catch(function(err){
          res.json({
            confirmation: 'fail',
            message: 'Profile ' + id + ' not found'
          })
          return
  })

  // var id = req.params.id
  // var resource = req.params.resource
  // if( resource == 'profile'){
  //   Profile.findById(id, function(err, result){
  //     if(err){
  //       res.json({
  //         confirmation: 'fail',
  //         message: 'Profile ' + id + ' not found'
  //       })
  //       return
  //     }
  //
  //     res.json({
  //       confirmation: 'success',
  //       message: result
  //     })
  //     return
  //   })
  // }
})

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]

  controller.create(req.body)
  .then(function(result){
    res.json({
      confirmation: 'success',
      message: result
    })
    return
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
    return
  })

  // if (resource == 'profile') {
  //   Profile.create(req.body, function(err, result){
  //     if ( err ) {
  //       res.json({
  //         confirmation: 'fail',
  //         message: err
  //       })
  //       return
  //     }
  //
  //     res.json({
  //       confirmation: 'success',
  //       result: result
  //     })
  //     return
  //   })
  // }
})

router.put('/:resource/:id', function(req, res, next){
  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]

  controller.findByIdAndUpdate(id)
  .then(function(result){
    res.json({
      confirmation:'success',
      results: results
    })
    return
  })
  .catch(function(err){
          res.json({
            confirmation: 'fail',
            message: err
          })
          return
  })

  // if(resource == 'profile') {
  //   Profile.findByIdAndUpdate(id, req.body, {new:true},function(err, result){
  //     if ( err ) {
  //       res.json({
  //         confirmation: 'fail',
  //         message: err
  //       })
  //       return
  //     }
  //     res.json({
  //       confirmation: 'success',
  //       result: result
  //     })
  //
  //   })
  // }

})

module.exports = router


// var express = require('express')
// var router = express.Router()
// // var ProfileController = require('../controllers/ProfileController')
// // var ServiceController = require('../controllers/ServiceController')
// // var ReviewController = require('../controllers/ReviewController')
// // var controllers = {
// //   profile: ProfileController,
// //   service: ServiceController,
// //   review: ReviewController
// // }
//
// var controllers = require('../controllers')
//
// router.get('/:resource', function(req, res, next){
//   var resource = req.params.resource
//   var controller = controllers[resource]
//
//   if (controller == null) {
//     res.json({
//       confirmation: 'fail',
//       message: 'Invalid Resource'
//     })
//     return
//   }
//
//   controller.get(req.query)
//   .then(function(results){
//     res.json({
//       confirmation:'success',
//       results: results
//     })
//     return
//   })
//   .catch(function(err){
//       res.json({
//         confirmation: 'fail',
//         message: err
//       })
//       return
//   })
//
// })
//
// router.get("/:resource/:id", function(req, res, next){
//
//   var id = req.params.id
//   var resource = req.params.resource
//   var controller = controllers[resource]
//
//   controller.getById(id)
//   .then(function(result){
//     res.json({
//       confirmation: 'success',
//       message: result
//     })
//     return
//   })
//   .catch(function(err){
//           res.json({
//             confirmation: 'fail',
//             message: 'Profile ' + id + ' not found'
//           })
//           return
//   })
//
//   // var id = req.params.id
//   // var resource = req.params.resource
//   // if( resource == 'profile'){
//   //   Profile.findById(id, function(err, result){
//   //     if(err){
//   //       res.json({
//   //         confirmation: 'fail',
//   //         message: 'Profile ' + id + ' not found'
//   //       })
//   //       return
//   //     }
//   //
//   //     res.json({
//   //       confirmation: 'success',
//   //       message: result
//   //     })
//   //     return
//   //   })
//   // }
// })
//
// router.post('/:resource', function(req, res, next){
//   var resource = req.params.resource
//   var controller = controllers[resource]
//
//   controller.create(req.body)
//   .then(function(result){
//     res.json({
//       confirmation: 'success',
//       message: result
//     })
//     return
//   })
//   .catch(function(err){
//     res.json({
//       confirmation: 'fail',
//       message: err
//     })
//     return
//   })
//
//   // if (resource == 'profile') {
//   //   Profile.create(req.body, function(err, result){
//   //     if ( err ) {
//   //       res.json({
//   //         confirmation: 'fail',
//   //         message: err
//   //       })
//   //       return
//   //     }
//   //
//   //     res.json({
//   //       confirmation: 'success',
//   //       result: result
//   //     })
//   //     return
//   //   })
//   // }
// })
//
// router.put('/:resource/:id', function(req, res, next){
//   var resource = req.params.resource
//   var id = req.params.id
//   var controller = controllers[resource]
//
//   controller.findByIdAndUpdate(id)
//   .then(function(result){
//     res.json({
//       confirmation:'success',
//       results: results
//     })
//     return
//   })
//   .catch(function(err){
//           res.json({
//             confirmation: 'fail',
//             message: err
//           })
//           return
//   })
//
//   // if(resource == 'profile') {
//   //   Profile.findByIdAndUpdate(id, req.body, {new:true},function(err, result){
//   //     if ( err ) {
//   //       res.json({
//   //         confirmation: 'fail',
//   //         message: err
//   //       })
//   //       return
//   //     }
//   //     res.json({
//   //       confirmation: 'success',
//   //       result: result
//   //     })
//   //
//   //   })
//   // }
//
// })
//
// module.exports = router
//
//
//
//
// // var express = require('express')
// // var router = express.Router()
// // var Profile = require('../models/Profile')
// // var ProfileController = require('../controllers/ProfileController')
// // var Service = require('../models/Service')
// // var ServiceController = require('../controllers/ServiceController')
// // var controllers = {
// //   profile: ProfileController,
// //   service: ServiceController
// // }
// //
// // router.get('/:resource', function(req, res, next){
// //   var resource = req.params.resource
// //   var controller = controllers[resource]
// //
// //   if (controller == null) {
// //     res.json({
// //       confirmation: 'fail',
// //       message: 'Invalid Resource'
// //     })
// //     return
// //   }
// //
// //   controller.get(req.query)
// //   .then(function(results){
// //     res.json({
// //       confirmation:'success',
// //       results: results
// //     })
// //     return
// //   })
// //   .catch(function(err){
// //       res.json({
// //         confirmation: 'fail',
// //         message: err
// //       })
// //       return
// //   })
// //
// // })
// //
// // router.get("/:resource/:id", function(req, res, next){
// //
// //   var resource = req.params.resource
// //   var id = req.params.id
// //
// //   if( resource == 'profile'){
// //     Profile.findById(id, function(err, result){
// //       if(err){
// //         res.json({
// //           confirmation: 'fail',
// //           message: 'Profile ' + id + ' not found'
// //         })
// //         return
// //       }
// //
// //       res.json({
// //         confirmation: 'success',
// //         message: result
// //       })
// //       return
// //     })
// //   }
// // })
// //
// // router.post('/:resource', function(req, res, next){
// //   var resource = req.params.resource
// //
// //   if (resource == 'profile') {
// //     Profile.create(req.body, function(err, result){
// //       if ( err ) {
// //         res.json({
// //           confirmation: 'fail',
// //           message: err
// //         })
// //         return
// //       }
// //
// //       res.json({
// //         confirmation: 'success',
// //         result: result
// //       })
// //       return
// //     })
// //   }
// // })
// //
// // router.put('/:resource/:id', function(req, res, next){
// //   var resource = req.params.resource
// //   var id = req.params.id
// //
// //   if(resource == 'profile') {
// //     Profile.findByIdAndUpdate(id, req.body, {new:true},function(err, result){
// //       if ( err ) {
// //         res.json({
// //           confirmation: 'fail',
// //           message: err
// //         })
// //         return
// //       }
// //       res.json({
// //         confirmation: 'success',
// //         result: result
// //       })
// //
// //     })
// //   }
// //
// // })
//
// module.exports = router
