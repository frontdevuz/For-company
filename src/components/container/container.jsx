import React from "react";
import "./container.scss"
const Container = (props) => {
  return (
    <React.Fragment>
      <div className="container" >{props.children}</div>
    </React.Fragment>
  );
};

export default Container;
