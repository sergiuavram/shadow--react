import { userTypes } from './user.types';

const userReducer = (state = null, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            localStorage.setItem('user', action.payload)
            return action.payload;
        case userTypes.LOGOUT:
            localStorage.removeItem('user');
            return null;
        default:
            return state;
    }
}

export default userReducer;