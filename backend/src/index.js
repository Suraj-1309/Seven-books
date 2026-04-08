import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import {app} from "./app.js"
import cors from "cors";

dotenv.config({
  path: "./.env",
});

// app.use(cors({

// }))

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed at index.js !!! ", err);
  });

