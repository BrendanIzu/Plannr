export const IP = '146.190.44.222';



export const API_URL = `http://${IP}:5000`;

export const authAPI = async (email, isLogin, name, password) => {
    const payload = {
        email,
        name,
        password,
    };
        
    return fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const backgroundColorAPI = (groupId, personId) => {
    const payload = {
        groupId,
        personId,
    };
    
    return fetch(`${API_URL}/colors/color`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const createEventAPI = (date, description, groupId, location, personId, title) => {
    const payload = {
        date, 
        description,
        groupId,
        location, 
        personId,
        title,
    };
    
    return fetch(`${API_URL}/events/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const createGroupAPI = (color, groupId, groupName, owner, personId) => {
    const payload = {
        color, 
        groupId,
        groupName,
        owner,
        personId,
    };
    
    console.log(payload);
    
    return fetch(`${API_URL}/groups/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

export const upcomingAPI = personId => {
    const payload = {
        personId
    };
    
    return fetch(`${API_URL}/events/upcoming`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const eventsAPI = (groupId, personId) => {
    const payload = {
        groupId,
        personId,
    };
    
    return fetch(`${API_URL}/events/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

export const groupsAPI = personId => {
    const payload = {
        personId,
    };
    
    return fetch(`${API_URL}/groups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const groupsFromEventAPI = groupId => {
    const payload = {
        groupId
    };
    
    return fetch(`${API_URL}/groups/byEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const loginAPI = async token => {
    return fetch(`${API_URL}/private`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
    });
};

export const membersAPI = groupId => {
    const payload = {
        groupId,
    };
    
    return fetch(`${API_URL}/groups/members`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const personIdAPI = email => {
    return fetch(`${API_URL}/user/userId`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    });
};

export const personsAPI = (owner, text) => {
    console.log("WE SHOULD BE HERE")
    const payload = {
        name: text,
        owner,
    };
    
    return fetch(`${API_URL}/user/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const updateRsvpAPI = (eventId, rsvp) => {
    const payload = {
        eventId,
        rsvp,
    };
    
    fetch(`${API_URL}/update/event/rsvp`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

export const userAPI = personId => {
    const payload = {
        id: personId,
    };
    
    return fetch(`${API_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

