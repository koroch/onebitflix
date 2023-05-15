import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface IEpisode {
    id: number
    name: string
    synopsis: string
    order: number
    videoUrl: string
    secondsLong: number
    courseId: number
}

export interface IEpisodeCreationAttributes extends Optional<IEpisode, 'id' | 'videoUrl'| 'secondsLong'> {}

export interface IEpisodeInstance extends Model<IEpisode, IEpisodeCreationAttributes>, IEpisode {}

export const Episode = sequelize.define<IEpisodeInstance, IEpisode>('Episode', {
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
    synopsis: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    order: {
        allowNull: false,
        type: DataTypes.STRING
    },
    videoUrl: {
        type: DataTypes.STRING
    },
    secondsLong: {
        type: DataTypes.INTEGER
    },
    courseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
})



