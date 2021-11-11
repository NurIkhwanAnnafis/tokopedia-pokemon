import {
    CATCH,
    RELEASE
} from '../types/pokemon.type';

const initState = {
    isLoading: false,
    listMyPokemon: []
};

function createData(Data, reqData) {
    const currData = Data;

    currData.push(reqData);

    return currData;
}

function deleteData(Data, nickname) {
    const currData = Data;
    const index = currData.findIndex(val => val.nickname === nickname);

    currData.splice(index, 1);

    return currData;
}

export default function pokemonReducer(state = initState, action) {
    switch (action.type) {
        case CATCH:
            return {
                ...state,
                listMyPokemon: createData(state.listMyPokemon, action.payload)
            }

        case RELEASE:
            return {
                ...state,
                listMyPokemon: deleteData(state.listMyPokemon, action.payload)
            }

    default:
        return state;
    }
}
