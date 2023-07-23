const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	artistName: {
		type: String,
		required: [true, "Artist Name is required"],
		unique: [true, "Artist Name Already Exists"],
	},
	lastName: {
        type: String,
        required: true
    },
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
	},
	password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
