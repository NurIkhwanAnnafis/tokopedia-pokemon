import { act } from "react-dom/test-utils"
import { constructData } from "../../../../pages/Home/settings/home.helper";

let dummyDataHome = null, 
    resultHome = null;

beforeEach(() => {
  resultHome = null
  dummyDataHome = {
    listData: [],
    listMyPokemon: []
  };
})

afterEach(() => {
  resultHome = null
  dummyDataHome = null;
})

describe('Helper Home', () => {
  it("should return Array with content", () => {
    act(() => {
      resultHome = constructData(dummyDataHome.listData, dummyDataHome.listMyPokemon)  
    })
    expect(resultHome).toStrictEqual([]);
  })
  
  it("should return empty Array", () => {
    act(() => {
      resultHome = constructData(null)  
    })
    expect(resultHome).toStrictEqual([]);
  })
  
  it("should return empty Array (2)", () => {
    act(() => {
      resultHome = constructData({})  
    })
    expect(resultHome).toStrictEqual([]);
  })
})