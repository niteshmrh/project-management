const express = require("express");
const router = express.Router();

const { client_cont, project_cont } = require("../../controllers/index");
router.post("/createclient", client_cont.createClientController);
router.delete("/deleteClient/:id", client_cont.deleteClientController);
router.delete("/updateClient/:id", client_cont.updateClientController);
router.get("/allClients", client_cont.getAllClientController);
router.post("/createproject", project_cont.createProjectController);
router.get("/allProjects", project_cont.getAllProjectController);
router.get("/");
// router.get("/view")
module.exports = router;
