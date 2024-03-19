const ClassModel = require("../models/ClassModel");

module.exports.createClassFlight = async function (req, res) {
  const { name, price, info } = req.body;
  console.log(info);
  try {
    const classFlight = await ClassModel.create({
      name: name,
      price: price,
      info: info,
    });

    console.log(classFlight);
    res.status(200).json({ classFlight });
  } catch (error) {
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.getAllClasses = async function (req, res) {
  try {
    const classes = await ClassModel.find({});
    if (!classes.length) return res.status(404).json({ message: "No data" });
    console.log(classes);
    let r = [];
    classes.map((item) => {
      r.push({ value: item.name, text: item.name, key: item.id });
    });
    return res.json(r);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.getClassById = async function (req, res) {
  const { id } = req.body;
  if (!id) return res.status(404).json({ message: "ID is required" });
  try {
    const classById = ClassSchema.findById(id);
    if (!classById.length) return res.status(404).json({ message: "No data" });
    res.json(classById);
  } catch (error) {
    console.log(error);
    res.status(500).json(JSON.stringify(error));
  }
};
