const sequelize = require('../config/connection');
const {User,Resolution} = require("../models")
const seedMe = async ()=>{
    await sequelize.sync({force:true})
    const users = [
        {
            email:"rachel@gmail.com",
            password:"password"
        },
        {
            email:"skylar@dog.com",
            password:"password2"
        },
        {
            email:"matt@gmail.com",
            password:"password3"
        }
    ]
    const resolutions = [
        {
            task:"Cook food more often",
            priority:"high",
            UserId:1
        },
        {
            task:"Go on walks every day",
            priority:"high",
            UserId:2
        },
        {
            task:"take a soak",
            priority:"medium",
            UserId:3
        },

    ]
    try{

        await User.bulkCreate(users,{
            individualHooks:true
        })
        await Resolution.bulkCreate(resolutions)
    }catch(err){
        throw err
    }
    process.exit(0);
}
seedMe()