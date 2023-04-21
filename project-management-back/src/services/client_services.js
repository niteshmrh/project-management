const { client_repo } = require("../repository/index");

const createClientServices = async (data) => {
  try {
    console.log("services client!!!!!!!!!!!!!!!!");
    const clientServicesData = await client_repo.createClientRepo(data);
    return clientServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllClientServices = async () => {
  try {
    console.log("services client!!!!!!!!!!!!!!!!");
    const getAllClientServicesData = await client_repo.getAllClientRepo();
    return getAllClientServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteClientServices = async (id) => {
  try {
    console.log(" delete services client!!!!!!!!!!!!!!!!", id);
    const deleteClientServicesData = await client_repo.deleteClientRepo(id);
    return deleteClientServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateClientServices = async (id) => {
  try {
    console.log(" update services client!!!!!!!!!!!!!!!!", id);
    const updateClientServicesData = await client_repo.updateClientRepo(
      id,
      data
    );
    return updateClientServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createClientServices,
  getAllClientServices,
  deleteClientServices,
  updateClientServices,
};
