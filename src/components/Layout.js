import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import '../styles/index.css';
import '../styles/index.scss';

const Layout = (props) => {
  const { children, isLoading } = props;
  return (
    <div className="App">
      <Header />
      <div className="App-header p-4">
        {isLoading && <Loading />}
        {children}
      </div>
    </div>
  )
}

export default Layout;