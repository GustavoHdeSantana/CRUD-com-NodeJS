import { DataTypes } from "sequelize";
import db from "../db";
import { UserModel } from "./UserModel";

export const TurmaModel = db.define('turma',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

