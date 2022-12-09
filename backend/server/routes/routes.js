import express from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';
import { create, day, events, upcoming } from '../controllers/events.js';
import { user, users, userId } from '../controllers/user.js';
import { color, createColor } from '../controllers/colors.js'
import { addPerson, createGroup, groups, groupsFromEvent, members } from '../controllers/groups.js';
import { updateRsvp } from '../controllers/update.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.post('/user', user);
router.post('/user/users', users);
router.post('/user/userId', userId);

router.post('/events/create', create)
router.post('/events/day', day)
router.post('/events/events', events);
router.post('/events/upcoming', upcoming);

router.post('/colors/color', color);
router.post('/colors/create', createColor);

router.post('/groups', groups);
router.post('/groups/addPerson', addPerson);
router.post('/groups/byEvent', groupsFromEvent);
router.post('/groups/create', createGroup);
router.post('/groups/members', members);

router.put('/update/event/rsvp', updateRsvp);


router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;