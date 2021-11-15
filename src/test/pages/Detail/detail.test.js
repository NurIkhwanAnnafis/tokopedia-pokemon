import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils"
import Wrapper from '../../../components/Wrapper';
import Detail from '../../../pages/Detail';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

const DetailWrapper = (props) => (<Wrapper><Detail {...props} /></Wrapper>)
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

describe('Pages Detail Test', () => {
  it("Test Case 1 = should see all component in detail pokemon", async () => {
    const fakeData = {
      listMyPokemon: [{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}],
      id: 1
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
      })
    );

    act(() => {
      render(<DetailWrapper {...fakeData} />, container);
    })

    await new Promise((r) => setTimeout(r, 2000));
    
    expect(container.querySelector('i').innerHTML).toEqual('bulbasaur')
    expect(container.querySelectorAll('.box-pokemon').length).toEqual(1)
    expect(container.querySelectorAll('.box-detail-pokemon').length).toEqual(1)
    expect(container.querySelectorAll('img').length).toEqual(2) // with image loading
    expect(container.querySelectorAll('button').length).toEqual(1)
    expect(container.textContent).toContain('grass and poison')
    expect(container.textContent).toContain('razor-wind')
  })

  // it("Test Case 2 = catch pokemon should see message", async () => {
  //   const fakeData = {
  //     listMyPokemon: [{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}],
  //     id: 1
  //   };
  //   jest.spyOn(global, "fetch").mockImplementation(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(fakeData)
  //     })
  //   );

  //   act(() => {
  //     render(<DetailWrapper {...fakeData} />, container);
  //   })

  //   await new Promise((r) => setTimeout(r, 2000));
  //   const button = container.querySelectorAll('button');

  //   act(() => {
  //     button[0].dispatchEvent(new MouseEvent('click', {bubbles: true}));
  //   });
  //   await new Promise((r) => setTimeout(r, 500));
  //   expect(container.querySelectorAll('.loading-screen').length).toEqual(1)
  //   await new Promise((r) => setTimeout(r, 2500));

  //   expect(container.querySelectorAll('.ant-message').length).toEqual(1)    
  // })
})
