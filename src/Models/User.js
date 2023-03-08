var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

var User = (module.exports = mongoose.model("fichas", userSchema));

module.exports.get = async (filter) => {
  return await User.findOne(filter).exec();
};
