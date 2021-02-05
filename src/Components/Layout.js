import React from "react";
// import Appbar from "../appBar/Appbar";
import Navigation from "./Nvigation";

const styles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Navigation />
    <hr />
    {children}
  </div>
);

export default Layout;
