import React from "react";

const CardContainer = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default CardContainer;
