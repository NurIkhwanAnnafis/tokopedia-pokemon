import {
    LOADING
} from '../types/global.type';

const initState = {
    isLoading: false,
    typeLoading: "global"
};

export default function globalReducer(state = initState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.flag,
                typeLoading: action.payload.typeLoading
            }

    default:
        return state;
    }
}
