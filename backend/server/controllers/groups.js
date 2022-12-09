import { Sequelize } from 'sequelize';
import Group from '../models/group.js';
import Color from '../models/color.js';

const createGroup = (req, res, next) => {
    console.log('this one');
    Group.findOne({ where : {
        owner: req.body.owner,
        group_name: req.body.groupName, 
    }})
    .then(dbGroup => {
        if(dbGroup) {
            return res.status(409).json({message: "group already exists"}); 
        } else {
            const group = Group.create(({
                owner: req.body.owner,
                group_id: req.body.owner+req.body.groupName,
                group_name: req.body.groupName,
                person_id: req.body.personId,
            }))
            .then((group) => {
                return Color.create(({
                    group_id: group.group_id,
                    person_id: group.person_id,
                    color: req.body.color,
                }))
                .then(() => {
                    res.status(200).json({message: "group and color created"});
                })
            })
            .then(() => {
                console.log(req.body.color, req.body.groupId, req.body.groupName, req.body.owner, req.body.personId);
            })
            .catch(err => {
                console.log(err);
                res.status(502).json({message: "error while creating the group"});
            });
        };
    });
};

const addPerson = (req, res, next) => {
    Group.findOne ({where : {
        group_name: req.body.groupName,
    }})
    .then(dbGroup => {
        if(!dbGroup) {
            return res.status(409).json(({message: "group not found"}));
        } else {
            return Group.create(({
                owner: req.body.owner,
                group_id: req.body.owner+req.body.groupName,
                group_name: req.body.groupName,
                person_id: req.body.personId,
            }))
            .then(() => {
                res.status(200).json({message: "added person to group"});
            })
            .catch(err => {
                console.log(err);
                res.status(502).json({message: "error while adding person to group"});
            });
        }
    })
}

const members = (req, res, next) => {
    const members = Group.findAll({
        where : {
            group_id: req.body.groupId,
        },
    })
    .then((members) => {
        res.json(members);
    })
    .catch(err => {
        console.log('error', err);
    });
}

const groups = (req, res, next) => {
    const groups = Group.findAll({ 
        where : {
            person_id: req.body.personId,
        },
    })
    .then((groups) => {
        res.json(groups);
    })
    .catch(err => {
        console.log('error', err);
    });
};

const groupsFromEvent = (req, res, next) => {
    const groups = Group.findAll({
        attributes: [`person_id`],
        where: {
            group_id: req.body.groupId,
        }
    })
    .then((groups) => {
        res.json(groups);
    })
    .catch(err => {
        console.log('error', err);
    });
};


export { addPerson, createGroup, groups, groupsFromEvent, members };