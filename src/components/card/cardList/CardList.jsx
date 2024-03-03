import React from "react";
import CardStructure from "../cardStructure/CardStructure";
import data from "../../../data.json";

function CardList() {
  return (
    <React.Fragment>
      {data.map((card) => (
        <CardStructure
          name={card.name}
          tariff={card.tariff}
          speed={card.speed}
          capacity={card.capacity}
          nameBackgroundColor={card.nameBackgroundColor}
          tariffBackgroundColor={card.tariffBackgroundColor}
          size={card.size}
        />
      ))}
    </React.Fragment>
  );
}

export default CardList;
