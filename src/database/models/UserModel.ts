import { DataTypes } from "sequelize";
import UserControllers from "../../controllers/UserControllers";
import db from "../db";
import { TurmaModel } from "./TurmaModel";


export const UserModel = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idturma: {
    type: DataTypes.INTEGER,
    allowNull: true
    }
})

