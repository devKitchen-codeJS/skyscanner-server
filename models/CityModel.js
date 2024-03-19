const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CitySchema = new Schema({
  name: { type: String, required: true },
  country: {
    type: Schema.Types.ObjectId,
    ref: "CountrySchema",
    required: true,
  },
  city_code: { type: String, required: true },
});
module.exports = mongoose.model("CitySchema", CitySchema);


