import * as ActionTypes from './ActionTypes';

const initialState = {
    musicians: [
        {title: 'Example', location: 'example location', email: 'example@example.com', message: 'This is an example post, please follow this format when adding a post.'}
    ],
}

export const Musicians = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MUSICIAN_POST:
            const musician = action.payload
            musician.id = state.musicians.length
            return { ...state, musicians: state.musicians.concat(musician) }
        default:
            return state
    }
}