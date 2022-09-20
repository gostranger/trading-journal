import React from "react";

const Card = (props: any) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {props.cardTitle && <h5 className="card-title">{props.cardTitle}</h5>}
        {props.cardSubtitle && (
          <h6 className="card-subtitle mb-2 text-muted">
            {props.cardSubtitle}
          </h6>
        )}
        <p className="card-text">{props.cardText}</p>
        <a href="#" className="card-link">
          {props.link}
        </a>
      </div>
    </div>
  );
};

export default Card;
