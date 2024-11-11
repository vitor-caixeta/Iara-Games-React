import React from "react";
import Navigation from "../layout/navbar/Navbar";
import SubNav from "../layout/sub-nav/SubNav";

export const CustomLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <Navigation />
      <SubNav />
      <div style={{ flex: 1 }}>{props.children}</div>
    </div>
  );
};
