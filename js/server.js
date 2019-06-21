const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moment = require('moment');
const fs = require('fs');

const Sequelize = require('sequelize');

const connection = new Sequelize('postgres', 'sen-frien-syr', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = connection.define('user', {
    name: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
    //password
    birthday: Sequelize.DATEONLY
});

const Review = connection.define('review', {
    text: { type: Sequelize.TEXT, unique: true, allowNull: false },
    timestamp: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    },
    venue_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: Venue,
            key: 'id'
        }
    }
});

const Venue = connection.define('venue', {
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    address: { type: Sequelize.STRING, unique: true, allowNull: false },
    phonenumber: { type:Sequelize.INTEGER, unique: true, allowNull: true },
    website: { type: Sequelize.STRING, unique: true, allowNull: true },
    event_id: { 
        type: Sequelize.INTEGER, 
        allowNull: true, 
        references: {
            model: Event,
            key: 'id'
        }
    },
    user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    }
});

const Comment = connection.define('comment', {
    text: { type: Sequelize.TEXT, unique: true, allowNull: false },
    timestamp: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    },
    venue_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: Venue,
            key: 'id'
        }
    },
    review_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: Review,
            key: 'id'
        }
    }
});

const Resource = connection.define('resource', {
    name: { type: Sequelize.STRING, unique: true, allowNull: false },
    description: Sequelize.TEXT,
    address: { type: Sequelize.STRING, unique: true, allowNull: true },
    phonenumber: { type:Sequelize.INTEGER, unique: true, allowNull: true },
    website: { type: Sequelize.STRING, unique: true, allowNull: true },
    user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    },
});

const Event = connection.define('event', {
    name: Sequelize.STRING,
    timestamp: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    description: Sequelize.TEXT,
    address: { type: Sequelize.STRING, allowNull: true },
    phonenumber: { type:Sequelize.INTEGER, allowNull: true },
    website: { type: Sequelize.STRING, allowNull: true },
    eventdate: Sequelize.DATEONLY,
    user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    },
    venue_id: { 
        type: Sequelize.INTEGER, 
        allowNull: true, 
        references: {
            model: Venue,
            key: 'id'
        }
    }
});

connection.sync();

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // sequelize.TEXT = much longer string than the string data type