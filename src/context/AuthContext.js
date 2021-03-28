import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const { Provider, Context } = createDataContext(
    authReducer, // reducers
    {}, // actions
    { isSignedIn: false } // initial state
)