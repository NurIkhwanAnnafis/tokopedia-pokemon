import {
    CATCH,
    RELEASE
} from '../types/pokemon.type';

const initState = {
    isLoading: false,
    listMyPokemon: []
};

function createData(data, reqData) {
    const currData = data;

    currData.push(reqData);

    return currData;
}

function deleteData(data, deletedData) {
    const currData = data;
    const index = currData.findIndex(val => val.nickname === deletedData.nickname && val.name === deletedData.name);

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
