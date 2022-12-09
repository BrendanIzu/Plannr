import { Sequelize } from 'sequelize';
import Color from '../models/color.js';

const color = (req, res, next) => {
    const color = Color.findOne({ where : {
        group_id: req.body.groupId,
        person_id: req.body.personId,
    }})
    .then((user) => {
        res.json(user);
    })
    .catch(err => {
        console.log('error', err);
    });
};

const createColor = (req, res, next) => {
    Color.create(({
        group_id: req.body.groupId,
        person_id: req.body.personId,
        color: req.body.color,
    }))
    .then(() => {
        res.status(200).json({message: "color created"});
    })
    .catch(err => {
        console.log(err);
        res.status(502).json({message: "error while creating the color"});
    });
};

export { color, createColor };