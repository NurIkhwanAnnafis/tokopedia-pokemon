import {
    LOADING
} from '../types/global.type';

const initState = {
    isLoading: false,
};

export default function globalReducer(state = initState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

    default:
        return state;
    }
}
