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
module.exports = { createProjectRepo, getAllProjectRepo };
