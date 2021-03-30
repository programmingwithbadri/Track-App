import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
        case 'SIGNUP':
            return { token: action.payload, errorMessage: '' }
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload }
        case 'CLEAR_ERROR_MESSAGE':
            return { ...state, errorMessage: ''}
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    console.log('Called')
    dispatch({
        type: 'CLEAR_ERROR_MESSAGE'
    })
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


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'SIGNIN',
            payload: response.data.token
        })

        navigate('TrackList');
    }
    catch (err) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something went wrong with signin'
        })
    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer, // reducers
    { signin, signout, signup, clearErrorMessage }, // actions
    { token: null, errorMessage: '' } // initial state
)