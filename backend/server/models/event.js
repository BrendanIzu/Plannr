import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Event = sequelize.define('events', {
      event_id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      person_id: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      group_id: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      title: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      location: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      date: {
         type: Sequelize.STRING,
      },
      description: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      rsvp: {
         type: Sequelize.STRING,
      }
   }, {
      timestamps: false
   });

export default Event;