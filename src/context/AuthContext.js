import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return { token: action.payload, errorMessage: '' }
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'SIGNUP',
            payload: response.data.token
        })

        navigate('TrackList');
    }
    catch (err) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something went wrong with signup'
        })
    }
}


const signin = (dispatch) => {
    return ({ email, password }) => {

    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer, // reducers
    { signin, signout, signup }, // actions
    { token: null, errorMessage: '' } // initial state
)