import axiosInstance from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cleanup } from '@testing-library/react';
import { fetchListPokemon, fetchDetailPokemon } from '../../../data/pokemon';

const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });
const dataListPokemon = {
  count: 1118,
  next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
  previous: null,
  results: [{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}]
}

const dataDetailPokemon = {
  name: "charmander",
  order: 5,
  height: 6,
  id: 4,
  is_default: true,
  types: [{slot: 1, type: {name: "fire", url: "https://pokeapi.co/api/v2/type/10/"}}],
  moves: [{move: {name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/"}}]
}

beforeAll(() => {
  mock.reset();
})

afterEach(cleanup);

describe('axios mocking test', () => {
  it('should get list pokemon', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon').reply(200, dataListPokemon);

    const result = await fetchListPokemon({ limit: 10, offset: 0 });

    expect(result.count).toEqual(1118);
    expect(result.next).toEqual('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10');
    expect(result.previous).toStrictEqual(null);
    expect(result.results.length).toEqual(1);
    expect(result.results[0].name).toEqual('bulbasaur');
    expect(result.results[0].url).toEqual('https://pokeapi.co/api/v2/pokemon/1/');
  }, 200000)

  it('should get detail pokemon', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon/4').reply(200, dataDetailPokemon);

    const result = await fetchDetailPokemon(4);

    expect(result.name).toEqual('charmander');
    expect(result.order).toEqual(5);
    expect(result.height).toEqual(6);
    expect(result.id).toEqual(4);
    expect(result.types.length).toEqual(1);
    expect(result.moves.length).toEqual(1);
  }, 200000)
})