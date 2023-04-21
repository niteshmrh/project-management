const { client_ser } = require("../services/index");

const createClientController = async (req, res) => {
  try {
    console.log("controller client!!!!!!!!!!!!!!!!");
    const clientControllerData = await client_ser.createClientServices(
      req.body
    );
    return res.status(201).json({
      data: clientControllerData,
      success: true,
      message: "Client Create Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not created",
      err: error,
    });
  }
};

const getAllClientController = async (req, res) => {
  try {
    console.log("controller client!!!!!!!!!!!!!!!!");
    const getAllClientControllerData = await client_ser.getAllClientServices();
    return res.status(201).json({
      data: getAllClientControllerData,
      success: true,
      message: "All Client fetched Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not fetched",
      err: error,
    });
  }
};
const deleteClientController = async (req, res) => {
  try {
    console.log("controller client delete !!!!!!!!!!!!!!!!", req.query);
    const deleteClientControllerData = await client_ser.deleteClientServices(
      req.params.id
    );
    return res.status(201).json({
      data: deleteClientControllerData,
      success: true,
      message: `Client deleted Successfully`,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not deleted",
      err: error,
    });
  }
};

const updateClientController = async (req, res) => {
  try {
    console.log("controller client delete !!!!!!!!!!!!!!!!", req.query);
    const updateClientControllerData = await client_ser.updateClientServices(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: updateClientControllerData,
      success: true,
      message: `Client Update Successfully`,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "client is not Updated",
      err: error,
    });
  }
};

module.exports = {
  createClientController,
  getAllClientController,
  deleteClientController,
  updateClientController,
};
