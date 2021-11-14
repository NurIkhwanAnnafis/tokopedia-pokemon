import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import '../styles/custom.scss';

const Layout = (props) => {
  const { children, isLoading } = props;
  return (
    <div className="app">
      <Header />
      <div className="app-header p-4">
        {isLoading && <Loading />}
        {children}
      </div>
    </div>
  )
}

export default Layout;