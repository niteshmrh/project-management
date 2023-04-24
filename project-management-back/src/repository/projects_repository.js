const { Projects } = require("../models/index");

const createProjectRepo = async (data) => {
  try {
    console.log("respositroy project!!!!!!!!!!!!!!!!");
    const projectRepoData = await Projects.create(data);
    return projectRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getAllProjectRepo = async () => {
  try {
    console.log("Get All respositroy Project !!!!!!!!!!!!!!!!");
    const getAllProjectRepoData = await Projects.findAll();
    return getAllProjectRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getParticularProjectRepo = async (id) => {
  try {
    console.log(" get Particular respositroy project!!!!!!!!!!!!!!!!", id);
    const getParticularProjectRepoData = await Projects.findByPk(id);
    return getParticularProjectRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = {
  createProjectRepo,
  getAllProjectRepo,
  getParticularProjectRepo,
};
