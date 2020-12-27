import * as ActionTypes from './ActionTypes';

export const addMusician = (title, email, message) => (dispatch) => {
    const newMusician = {
        title: title,
        email: email,
        message: message
    }
    dispatch({
        type: ActionTypes.ADD_MUSICIAN_POST,
        payload: newMusician
    })
}