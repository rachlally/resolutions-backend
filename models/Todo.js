const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init({
    task: {
        type: DataTypes.STRING,
        allowNull:false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull:false
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Todo