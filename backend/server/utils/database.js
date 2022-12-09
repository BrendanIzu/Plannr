import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('plannrdb', 'admin', 'password', {
    dialect: 'mysql',
    host: 'plannrdb.cavwijpewanu.us-west-1.rds.amazonaws.com', 
});

export default sequelize;