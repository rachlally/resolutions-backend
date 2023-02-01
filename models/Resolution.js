const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resolution extends Model {}

Resolution.init({
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

module.exports=Resolution