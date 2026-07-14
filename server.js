
import "dotenv/config"
import app from "./src/app.js";
import ConnectDB from "./src/DB_Connection/ConnectDB.js";
const PORT = process.env.PORT || 5000;
await ConnectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});