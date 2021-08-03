const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const authRouter= require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
}).then(()=>console.log("DB Connection Successful!!"))
.catch((error)=>{
    console.log(error);
});

app.use(express.json());

app.use("/api/auth",authRouter);

app.listen(process.env.PORT, () => {
  console.log("Backend Server is Running");
});
