import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Group = sequelize.define('groups', {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      group_id: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      owner: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
      group_name: {
        type: Sequelize.STRING,
        allowNull: false,
     },
      person_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
   }, {
      timestamps: false
   });

export default Group;