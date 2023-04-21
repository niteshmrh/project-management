const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ApiRoutes = require("./src/routes/index");
const PORT = 4000;
const setupAndStartServer = async () => {
  //create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartServer();