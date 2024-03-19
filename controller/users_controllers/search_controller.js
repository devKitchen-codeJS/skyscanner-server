// const obj = {
//   _id: ObjectId("5f8a967848b87c14f5de1b1a"),
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     zip: "12345",
//   },
//   hobbies: ["reading", "traveling"],
// };

const CountryModel = require("../../models/CityModel");
const CityModel = require("../../models/CityModel");
const AirportModel = require("../../models/AirportModel");

module.exports.Search = async function (req, res) {
  const { value } = req.body;
  if (!value) return res.status(404).json("Value is requred");
  try {
    const regex = new RegExp(`^${value}`, "i");
    const city_search_result = await CityModel.find({ name: regex }).populate(
      "country"
    );
    let result = [];
    city_search_result.map((item, key) => {
      result.push({
        value: item.name,
        text: item.name,
        key: item.id,
        country: item.country,
      });
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.SearchFlights = async function (req, res) {
  const { from, to, type } = req.body;
  try {
    console.log("[params]", params);
  } catch (error) {
    return res.status(500).json(JSON.stringify(error));
  }
};
