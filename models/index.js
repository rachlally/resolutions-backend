const User=require('./User')
const Resolution=require('./Resolution')

User.hasMany(Resolution);
Resolution.belongsTo(User);

module.exports={
    User,
    Resolution
}