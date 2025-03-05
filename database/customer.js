const mongoose = require("mongoose");
const product = require("./product");
const printout = require("./printout");
const order = require("./order");

// MongoDB connection string
const uri = "mongodb+srv://HariomModi78:HARIOMMODI99@cluster0.wv1zs.mongodb.net/?retryWrites=true&w=majority";

// Connect Mongoose properly
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout in case of connection issues
});

const db = mongoose.connection;

// Connection success
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

// Connection error handling
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Define the schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String,
  password: String,
  college: String,
  cart: Array,
  order: Array,
  wishList: Array,
});

// Export the model correctly
module.exports = mongoose.model("Customer", userSchema);
