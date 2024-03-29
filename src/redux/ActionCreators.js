import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//Musicians
export const fetchMusicians = () => dispatch => {
    return fetch(baseUrl + 'musicians')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(musicians => dispatch(addMusicians(musicians)))
        .catch(error => dispatch(musiciansFailed(error.message)));
};

export const musiciansFailed = errMess => ({
    type: ActionTypes.MUSICIANS_FAILED,
    payload: errMess
});

export const addMusicians = musicians => ({
    type: ActionTypes.ADD_MUSICIANS,
    payload: musicians
});

export const addMusician = musician => ({
    type: ActionTypes.ADD_MUSICIAN,
    payload: musician
});

export const removeMusician = musician => ({
    type: ActionTypes.REMOVE_MUSICIAN,
    payload: musician
});

export const postMusician = (title, location, email, message) => dispatch => {

    const newMusician = {
        title: title,
        location: location,
        email: email,
        message: message
    }
    console.log('Musician ', newMusician);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'musicians', {
        method: 'POST',
        body: JSON.stringify(newMusician),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addMusician(response)))
    .catch(error => {
        console.log('post musician', error.message);
        alert('Your musician could not be posted\nError: ' + error.message);
    });
};

export const deleteMusician = musicianId => dispatch => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'musicians/' + musicianId, {
        method: 'DELETE',
        headers: {
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(musician => {
        console.log('Musician Deleted', musician);
        dispatch(removeMusician(musician));
    })
    .catch(error => dispatch(musiciansFailed(error.message)));
};





/*export const addMusician = (title, location, email, message) => (dispatch) => {
    const newMusician = {
        title: title,
        location: location,
        email: email,
        message: message
    }
    dispatch({
        type: ActionTypes.ADD_MUSICIAN_POST,
        payload: newMusician
    })
} */


//Gigs
/*export const addGig = (venue, location, date, time, email, details) => (dispatch) => {
    const newGig = {
        venue: venue,
        location: location,
        date: date,
        time: time,
        email: email,
        details: details
    }
    dispatch({
        type: ActionTypes.ADD_GIG,
        payload: newGig
    })
}*/

export const fetchGigs = () => dispatch => {
    return fetch(baseUrl + 'gigs')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(gigs => dispatch(addGigs(gigs)))
        .catch(error => dispatch(gigsFailed(error.message)));
};

export const gigsFailed = errMess => ({
    type: ActionTypes.GIGS_FAILED,
    payload: errMess
});

export const addGigs = gigs => ({
    type: ActionTypes.ADD_GIGS,
    payload: gigs
});

export const addGig = gig => ({
    type: ActionTypes.ADD_GIG,
    payload: gig
});

export const removeGig = gig => ({
    type: ActionTypes.REMOVE_GIG,
    payload: gig
});

export const postGig = (venueName, location, date, time, pay, email, description) => dispatch => {

    const newGig = {
        venueName: venueName,
        location: location,
        date: date,
        time: time,
        pay: pay,
        email: email,
        description: description
    }
    console.log('Gig ', newGig);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'gigs', {
        method: 'POST',
        body: JSON.stringify(newGig),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addGig(response)))
    .catch(error => {
        console.log('post gig', error.message);
        alert('Your gig could not be posted\nError: ' + error.message);
    });
};

export const deleteGig = gigId => dispatch => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'gigs/' + gigId, {
        method: 'DELETE',
        headers: {
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(gig => {
        console.log('Gig Deleted', gig);
        dispatch(removeGig(gig));
    })
    .catch(error => dispatch(gigsFailed(error.message)));
};



//Login
export const requestLogin = creds => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = response => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = message => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                console.log('1');
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            //dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } else {
            console.log('2');
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    //dispatch(favoritesFailed('Error 401: Unauthorized'));
    dispatch(receiveLogout())
}