import {LOGIN_ERROR} from '../../components/login/actions';

//-------------------------------------------------------------------
// Error STORE
//-------------------------------------------------------------------
export const error = (state = null, {type, payload}) => {
    /* eslint-disable indent */
    switch (type) {
        case LOGIN_ERROR:
            return payload;

        default:
            return null;
    }
};