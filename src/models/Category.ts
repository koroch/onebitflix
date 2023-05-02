import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface ICategory{
    id: number,
    name: string,
    position: number
}

export interface ICategoryCreationAttributes extends Optional<ICategory, 'id'>{}

export interface ICategoryInstace extends Model<ICategory, ICategoryCreationAttributes>, ICategory{}

export const Category = sequelize.define<ICategoryInstace, ICategory>('Category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    position: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})