import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const startRecording = dispatch => () => {

}

const stopRecording = dispatch => () => {
}

const addLocation = dispatch => () => { }

export const { Provider, Context } = createDataContext(
    locationReducer, // reducers
    { startRecording, stopRecording, addLocation }, // actions
    { currentLocation: null, locations: [], recording: false } // initial state
)