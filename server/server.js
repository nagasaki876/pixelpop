// Importing required modules
const cors = require('cors');
const express = require('express');
const path = require("path");

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 3000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));


if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname + "/dist/"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname + "dist" + "index.html"));
	});
}
// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
