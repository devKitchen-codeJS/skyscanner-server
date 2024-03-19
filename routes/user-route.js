const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");
const countriesController = require("../controller/countries_controller");
const getDataController = require("../controller/getDataController");
// const postDataController = require('../controller/postDataController')
// const serviceAppController = require('../controller/serviceAppController')
const search = require("../controller/users_controllers/search_controller");
const classes_controller = require("../controller/class_controller");
const flight_controller = require('../controller/flight_controller')
const aircraft_controller = require('../controller/aircraft_controller')
const airports_controller = require('../controller/airports_controller')

router.post("/auth-user-create", authController.createUser);
router.post("/auth-user-update", authController.updateUser);
router.post("/auth-user-login", authController.loginUser);
router.post("/getadmin", authController.getAdmin);


router.post('/getCity', getDataController.getCity)


router.post("/search", search.Search);

router.get("/getAllClasses", classes_controller.getAllClasses);
router.post('/createClassFlight', classes_controller.createClassFlight)

router.post("/createCountry", countriesController.createCountry)
router.get("/getAllCountries", countriesController.getAllCountries);
router.post("/getCountryById", countriesController.getCountryById);

router.get('/getAllAirports',airports_controller.getAllAirports)
router.post('/getAirportById',airports_controller.getAirportById)


router.post("/findFlights", flight_controller.findFlights)

router.post('/createAircraft', aircraft_controller.createAircraft)


router.get("/getCountry", getDataController.getCountry);

router.get("/", function (req, res) {
  res.send("respond with a resource");
});

module.exports = router;



// router.get('/getAirports', getDataController.getAirpots)
// router.get('/getFlights', getDataController.getFlights)
// router.get('/getAirportsByCity', getDataController.getFindAirport)
// router.get('/updateAirports', getDataController.updateAirports)

// router.get('/serviceFunction', serviceAppController.RelocateData)
// router.post('/addFlight', postDataController.addFlight)
// router.post('/getFindedAirports', getDataController.getFindAirports)
// router.post('/getDirection', getDataController.getDirection)
