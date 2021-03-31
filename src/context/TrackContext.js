import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'ADD_CURRENT_LOCATION':
            return { ...state, currentLocation: action.payload }
        case 'START_RECORDING':
            return { ...state, recording: true }
        case 'STOP_RECORDING':
            return { ...state, recording: false }
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        default:
            return state;
    }
}

const fetchTracks = (dispatch) => () => { }

const createTrack = (dispatch) => () => { }

export const { Provider, Context } = createDataContext(
    trackReducer, // reducers
    { fetchTracks, createTrack }, // actions
    [] // initial state
)