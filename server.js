const express = require("express");
const path = require("path");
const routes = require("./routes");
const cors = require('cors');

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring the `Book` model for accessing the `books` collection
const Book = require("./models/book");
 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

// Define API routes here
app.use(routes);

// Connect to the Mongo DB, called googlebooks
mongoose.connect(process.env.MONGODB_URI || "mongodb://aevers:dbpasspass1@ds247944.mlab.com:47944/heroku_nhnm6gxx");

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

