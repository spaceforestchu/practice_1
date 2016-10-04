var ProfileController = require('../controllers/ProfileController')
var ServiceController = require('../controllers/ServiceController')
var ReviewController = require('../controllers/ReviewController')

module.exports = {
  profile: ProfileController,
  service: ServiceController,
  review: ReviewController
}
