import { act } from "react-dom/test-utils"
import { normalizeGetId, normalizeTypes } from "../../helpers/normalize";

let resultId = null,
    resultType = null,
    dummyInput2Type = null,
    dummyInput3Type = null;

beforeEach(() => {
  resultId = null
  resultType = null
  dummyInput2Type = [{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},{"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}];
  dummyInput3Type = [{"slot":1,"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"}},{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},{"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}];
})

afterEach(() => {
  resultId = null;
  resultType = null;
  dummyInput2Type = null;
  dummyInput3Type = null;
})

describe('Helper Normalize Id', () => {
  it("should return null input null", () => {
    act(() => {
      resultId = normalizeGetId(null)
    })
    expect(resultId).toStrictEqual(null);
  })

  it("should return null input type object", () => {
    act(() => {
      resultId = normalizeGetId({})
    })
    expect(resultId).toStrictEqual(null);
  })

  it("should return null input invalid", () => {
    act(() => {
      resultId = normalizeGetId('https://pokeapi.co/api/v2/pokemon/1/')
    })
    expect(resultId).toStrictEqual(null);
  })

  it("should return id", () => {
    act(() => {
      resultId = normalizeGetId({name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"})
    })
    expect(resultId).toEqual(1);
  })
})

describe('Helper Normalize Types', () => {
  it("should return Unknown input null", () => {
    act(() => {
      resultType = normalizeTypes(null)
    })
    expect(resultType).toStrictEqual('Unknown');
  })

  it("should return Unknown input empty array", () => {
    act(() => {
      resultType = normalizeTypes([])
    })
    expect(resultType).toStrictEqual('Unknown');
  })

  it("should return single type name", () => {
    act(() => {
      resultType = normalizeTypes([{slot: 1, type: {name: "grass", url: "https://pokeapi.co/api/v2/type/12/"}}])
    })
    expect(resultType).toStrictEqual('grass');
  })

  it("should return contain and", () => {
    act(() => {
      resultType = normalizeTypes(dummyInput2Type)
    })
    expect(resultType).toContain('and');
  })

  it("should return contain ,", () => {
    act(() => {
      resultType = normalizeTypes(dummyInput3Type)
    })
    expect(resultType).toContain(',');
  })
})