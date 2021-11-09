import React from "react";
import Header from "./Header";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="App">
      <Header />
      <div className="App-header p-4">
        {children}
      </div>
    </div>
  )
}

export default Layout;