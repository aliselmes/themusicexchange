import * as ActionTypes from './ActionTypes';

export const addMusician = (title, location, email, message) => (dispatch) => {
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
}