import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils"
import Wrapper from '../../../components/Wrapper';
import Home from '../../../pages/Home';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

const HomeWrapper = () => (<Wrapper><Home /></Wrapper>)
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

describe('Pages Home Test', () => {
  it("Test Case 1 = should see table and pagination", async () => {
    const wrapper = mount(<HomeWrapper />);
    const elementTable = wrapper.find('table');
    const elementPagination = wrapper.find('.ant-pagination');
    
    expect(elementTable.length).toBe(1);
    expect(elementPagination.length).toBe(1);
    
  })

  it("Test Case 2 = should see list data in table and total data in pagination", async () => {
    const fakeData = {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"};
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
      })
    );

    act(() => {
      render(<HomeWrapper />, container);
    })

    await new Promise((r) => setTimeout(r, 2000));
    
    expect(container.querySelector('table').rows[1].cells[0].innerHTML).toEqual(fakeData.name)
    expect(container.textContent).toContain('112')
  })

  it("Test Case 3 = should change pages when click pokemon in table", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve()
      })
    );

    act(() => {
      render(<HomeWrapper />, container);
    })

    await new Promise((r) => setTimeout(r, 2000));
    const dataTable = container.querySelector('table').rows[1].cells[0];

    act(() => {
      dataTable.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(window.location.href).toContain('1')
  })

  it("Test Case 4 = should change page when click next page in pagination", async () => {
    const fakeData = {name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/"};
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve()
      })
    );

    act(() => {
      render(<HomeWrapper />, container);
    })

    await new Promise((r) => setTimeout(r, 2000));
    const pagination = container.querySelectorAll('button');

    act(() => {
      pagination[1].dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    await new Promise((r) => setTimeout(r, 2000));

    expect(container.querySelector('table').rows[1].cells[0].innerHTML).toEqual(fakeData.name)
    expect(container.textContent).toContain('2')
  })
})
