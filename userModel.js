const mongoose = require("mongoose");
var UserSchema = new mongoose.Schema(
    {
      
      name: { type: String },
      email: { type: String },
      password: { type: String },

    });
  
  module.exports = mongoose.model("users", UserSchema, "users");
  