
import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import store from "../store/store";
import Layout from '../components/Layout';

const Wrapper = ({ children }) => {
  
  return (
    <Provider store={store}>
      <Router>
        <Layout {...store}>
            {children}
        </Layout>
      </Router>
    </Provider>
  )
}

export default Wrapper;