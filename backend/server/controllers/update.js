import { Sequelize } from 'sequelize';

import Color from '../models/color.js';
import Event from '../models/event.js';

const updateRsvp = async (req, res, next) => {
    Event.update(
        {
            rsvp: req.body.rsvp,
        },
        {
            where: {
                event_id: req.body.eventId,
            }
        }
    );
}

export { updateRsvp };