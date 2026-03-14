import app from "./src/index";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();
const port = process.env.PORT
app.listen(port, () => {
 console.log(`Server running on port http://localhost:${port}/`);
});