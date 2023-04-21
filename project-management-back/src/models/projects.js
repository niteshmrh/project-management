"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init(
    {
      Name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Client: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );
  return Projects;
};
