const { project_ser } = require("../services/index");

const createProjectController = async (req, res) => {
  try {
    console.log("controller project!!!!!!!!!!!!!!!!");
    const projectControllerData = await project_ser.createProjectServices(
      req.body
    );
    return res.status(201).json({
      data: projectControllerData,
      success: true,
      message: "project Create Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "project is not created",
      err: error,
    });
  }
};

const getAllProjectController = async (req, res) => {
  try {
    console.log("controller Project!!!!!!!!!!!!!!!!");
    const getAllProjectControllerData =
      await project_ser.getAllProjectServices();
    return res.status(201).json({
      data: getAllProjectControllerData,
      success: true,
      message: "All Project fetched Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Project is not fetched",
      err: error,
    });
  }
};
module.exports = { createProjectController, getAllProjectController };
