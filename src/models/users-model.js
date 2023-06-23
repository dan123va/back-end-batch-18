"use strict";

const users = (sequelize, Sequelize) => {
  return sequelize.define(
    "Users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullName: {
        field: "full_name",
        type: Sequelize.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = users;
