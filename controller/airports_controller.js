const AirportModel = require("../models/AirportModel");

module.exports.createAirport = async function (req, res) {};

module.exports.getAllAirports = async function (req, res) {
  try {
    const airports = await AirportModel.find({}).populate('city').populate('country');
    if (!airports.length) return res.status(404).json({ message: "No data" });
    return res.json(airports);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.getAirportById = async function (req, res) {
  const { id } = req.body;
  if (!id) return res.status(404).json({ message: "ID is required" });
  try {
    const airport = await CountryModel.findById(id);
    console.log("[airport]", airport);
    if (!airport.length) return res.status(404).json({ message: "No data" });
    res.json(airport);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};



// docker run --name  master-service-postgres_master-1 -e POSTGRES_PASSWORD=123456 -d --network=my_network postgres:latest
// docker run --name slave-service-postgres_slave-1 -e POSTGRES_PASSWORD=123456 -d --network=my_network postgres:latest