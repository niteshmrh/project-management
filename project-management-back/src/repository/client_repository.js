const { Client } = require("../models/index");

const createClientRepo = async (data) => {
  try {
    console.log("respositroy client!!!!!!!!!!!!!!!!");
    const clientRepoData = await Client.create(data);
    return clientRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllClientRepo = async () => {
  try {
    console.log("Get All respositroy client !!!!!!!!!!!!!!!!");
    const getAllclientRepoData = await Client.findAll();

    return getAllclientRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteClientRepo = async (id) => {
  try {
    console.log(" delete respositroy client!!!!!!!!!!!!!!!!", id);
    const deleteClientRepoData = await Client.destroy({
      where: { id: id },
    });
    return deleteClientRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateClientRepo = async (id) => {
  try {
    console.log(" update respositroy client!!!!!!!!!!!!!!!!", id);
    const updateClientRepoData = await Client.update(data, {
      where: { id: id },
    });
    return updateClientRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = {
  createClientRepo,
  getAllClientRepo,
  deleteClientRepo,
  updateClientRepo,
};
