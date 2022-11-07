import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, description, rating } = service;
  return (
    <div>
      <div className="card w-full h-[500px] shadow-lg">
        <figure>
          <img src={img} className="w-96 h-64" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}...</p>
          <div className="flex justify-between">
            <p>Price: {price}</p>
            <p className="text-end">Rating: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;