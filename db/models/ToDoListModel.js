const SequelizeSlugify = require("sequelize-slugify");
const Sequelized = require("Sequelize");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      priority: {
        type: DataTypes.ENUM("high", "medium", "low"),
        defaultValue: "medium",
      },
      deadline: {
        type: DataTypes.DATE,
        defaultValue: new Date("January 31 2022"),
      },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });
  return Task;
};
