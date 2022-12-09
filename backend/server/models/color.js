import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Color = sequelize.define('colors', {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      person_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
      group_id: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      color: {
         type: Sequelize.STRING,
         allowNull: false,
      },
   }, {
      timestamps: false
   });

export default Color;