const CountryModel = require("../models/CountryModel");

module.exports.createCountry = async function (req, res) {
  const { name, country_code } = req.body;
  if (!name.length && !country_code.length) {
    return res.status(404).json({ message: "values is required" });
  }
  try {
    const newCountry = await CountryModel.create({
      name: name,
      country_code: country_code,
    });
    res.json(newCountry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports.getAllCountries = async function (req, res) {
  try {
    const country = await CountryModel.find({});
    // if (!country.length) return res.status(404).json({ message: "No data" });
    return res.json(country);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json(error);
  }
};

module.exports.getCountryById = async function (req, res) {
  const { id } = req.body;
  if (!id) return res.status(404).json({ message: "ID is required" });
  try {
    const country = await CountryModel.findById(id);
    console.log("[country]", country);
    // if(!country.length) return res.status(404).json({message: 'No data'})
    res.json(country);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};
