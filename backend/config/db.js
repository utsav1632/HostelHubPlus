const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("✅ Connected to MongoDB");
    console.log("🌐 Database name:", mongoose.connection.name);
    console.log("📍 Host:", mongoose.connection.host);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
