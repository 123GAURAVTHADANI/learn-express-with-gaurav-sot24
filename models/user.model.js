const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Kindly fill the email"],
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    unqiue: true,
    required: true,
    match: /^[6-9]\d{9}$/, // Indian 10-digit mobile number
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 15,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
