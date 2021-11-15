import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils"
import Wrapper from '../../../components/Wrapper';
import Profile from '../../../pages/Profile';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

const ProfileWrapper = (props) => (<Wrapper><Profile {...props} /></Wrapper>)
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
})

afterEach(() => {
})

describe('Pages Profile Test', () => {
  it("Test Case 1 = should see text and image indicatior no pokemon", async () => {
    const wrapper = mount(<ProfileWrapper />);

    await new Promise((r) => setTimeout(r, 2000));

    const elementImage = wrapper.find('img');
    const elementP = wrapper.find('p');

    expect(elementImage.length).toBe(2); // with image loading
    expect(elementP.length).toBe(1);
    
  })

  it("Test Case 2 = should list my pokemon", async () => {
    const fakeData = [{
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        nickname: 'goks',
        name: 'bulbasaur',
        types: [{slot: 1, type: {name: "grass", url: "https://pokeapi.co/api/v2/type/12/"}},{slot: 2, type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}}]
      }
    }]
    const wrapper = mount(<ProfileWrapper listMyPokemon={fakeData} />);

    await new Promise((r) => setTimeout(r, 2000));

    const boxPokemon = wrapper.find('.card-my-pokemon');
    const elementButton = wrapper.find('button');

    expect(boxPokemon.length).toBe(1);
    expect(elementButton.length).toBe(1);
  })

  it("Test Case 3 = should release my pokemon and return no pokemon", async () => {
    const fakeData = [{
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        nickname: 'goks',
        name: 'bulbasaur',
        types: [{slot: 1, type: {name: "grass", url: "https://pokeapi.co/api/v2/type/12/"}},{slot: 2, type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}}]
      }
    }]
    
    act(() => {
      render(<ProfileWrapper listMyPokemon={fakeData} />, container);
    })

    await new Promise((r) => setTimeout(r, 1000));
    const buttom = container.querySelectorAll('button');

    act(() => {
      buttom[0].dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    await new Promise((r) => setTimeout(r, 4000));

    expect(container.querySelectorAll('img').length).toEqual(2) // with image loading
    expect(container.querySelectorAll('p').length).toEqual(1)
  }, 20000)
})
