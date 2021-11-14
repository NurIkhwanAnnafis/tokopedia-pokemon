import { act } from "react-dom/test-utils"
import { checkPokemonIsTaken } from "../../../pages/Detail/settings/detail.helper";

let dummyDataDetail = null,
      resultDetail = null;

beforeEach(() => {
  resultDetail = null
  dummyDataDetail = {
    list: [
      {
        nickname: 'nickname pokemon',
        name: 'name pokemon',
      },
      {
        nickname: 'nickname pokemon 1',
        name: 'name pokemon 1',
      }
    ],
  };;
})

afterEach(() => {
  resultDetail = null
  dummyDataDetail = null;
})

describe('Helper Detail', () => {
  it("should return false", () => {
    act(() => {
      resultDetail = checkPokemonIsTaken(null, null, null)
    })
    expect(resultDetail).toStrictEqual(false);
  })

  it("should return false (2)", () => {
    act(() => {
      resultDetail = checkPokemonIsTaken(dummyDataDetail, 'nickname pokemon', 'name pokemon')
    })
    expect(resultDetail).toStrictEqual(false);
  })

  it("should return true", () => {
    act(() => {
      resultDetail = checkPokemonIsTaken(dummyDataDetail, 'new nickname pokemon', 'new name pokemon')
    })
    expect(resultDetail).toStrictEqual(false);
  })
})