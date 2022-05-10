import React from "react";

function BeerModal({ beer, setSelectedBeer }) {
  return (
    <div>
      <div>
        <img src={beer.image_url} alt="" />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <p>
          <b>Description: </b>
          {beer.description}
        </p>
        <p>
          <b>ABV: </b>
          {beer.abv}
        </p>
        <p>
          <b>PH: </b>
          {beer.ph}
        </p>
      </div>
    </div>
  );
}

export default BeerModal;
