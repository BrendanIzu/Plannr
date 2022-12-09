import { Sequelize } from 'sequelize';
import User from '../models/user.js';

const user = (req, res, next) => {
    const user = User.findAll({
        where : {
            id: req.body.id
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        console.log('error', err);
    });
};

const userId = (req, res, next) => {
    console.log("PLEEEASE");
    const user = User.findOne({ where : {
        email: req.body.email,
    }})
    .then((user) => {
        res.json(user);
    })
    .catch(err => {
        console.log('error', err);
    });
};

const users = (req, res, next) => {
    const users = User.findAll({
        where : {
            name: {
                [Sequelize.Op.like]: `${req.body.name}%`,
            },
            id: {
                [Sequelize.Op.ne]: req.body.owner,
            },
        }
    })
    .then((users) => {
        res.json(users);
    })
    .catch(err => {
        console.log('error', err);
    });
};

export { user, users, userId };