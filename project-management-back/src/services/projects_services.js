const { project_repo } = require("../repository/index");

const createProjectServices = async (data) => {
  try {
    console.log("services Project!!!!!!!!!!!!!!!!");
    const projectServicesData = await project_repo.createProjectRepo(data);
    return projectServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getAllProjectServices = async () => {
  try {
    console.log("services Project!!!!!!!!!!!!!!!!");
    const getAllProjectServicesData = await project_repo.getAllProjectRepo();
    return getAllProjectServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { createProjectServices, getAllProjectServices };
