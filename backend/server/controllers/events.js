import { Sequelize } from 'sequelize';
import Event from '../models/event.js';

const create = (req, res, next) => {
    Event.create(({
        person_id: req.body.personId,
        title: req.body.title,
        location: req.body.location,
        date: req.body.date,
        description: req.body.description,
        group_id: req.body.groupId,
        rsvp: 'MAYBE',
    }))
    .then(() => {
        res.status(200).json({message: "event created"});
    })
    .catch(err => {
        console.log(err);
        res.status(502).json({message: "error while creating the event"});
    });
};

const day = (req, res, next) => {
    const start = new Date();
    const end = new Date();
    
    start.setMonth(req.body.date.month - 1);
    start.setDate(req.body.date.day - 1);
    start.setFullYear(req.body.date.year);
    start.setUTCHours(0, 0, 0, 0);
    
    // fix how the end date is shown

    end.setDate(start.getDate());
    
    const events = Event.findAll({ where : {
        date: {
            [Sequelize.Op.between]: [start, end]
        }
    }})
    .then((events) => {
        res.json(events);
    })
    .catch(err => {
        console.log('error', err);
    });
}

const events = (req, res, next) => {
    const event = Event.findOne({
        where: {
            person_id: req.body.personId,
            group_id: req.body.groupId,
        }
    })
    .then((event) => {
        res.json(event);
    })
    .catch(err => {
        console.log('error', err);
    });
}

const upcoming = (req, res, next) => {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 5);
    
    const events = Event.findAll({ 
        where: {
            date: {
                [Sequelize.Op.between]: [start, end],
            },
            person_id: req.body.personId,
        },
        order: [
            ['date', 'DESC'],
        ]
    })
    .then((events) => {
        res.json(events);
    })
    .catch(err => {
        console.log('error', err);
    });
};

export { create, day, events, upcoming };