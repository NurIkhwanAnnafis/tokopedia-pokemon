import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils"
import Provider from '../Provider';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("render app", () => {
  act(() => {
    render(<Provider />, container);
  })
  expect(container.textContent).toBe("To do applicationCreate To doList Data (not finished)List Data (done)")
})
