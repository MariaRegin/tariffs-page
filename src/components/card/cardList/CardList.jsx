import React from "react";
import CardStructure from "../cardStructure/CardStructure";

function CardList() {
  return (
    <React.Fragment>
      <CardStructure
        name="Безлимитный 300"
        tariff="300"
        speed="до 10 Мбит/сек"
        capacity="Объем включенного трафика не ограничен"
        nameBackgroundColor="darkblue"
        tariffBackgroundColor="darkblue"
      />
      <CardStructure
        name="Безлимитный 450"
        tariff="450"
        speed="до 50 Мбит/сек"
        capacity="Объем включенного трафика не ограничен"
        nameBackgroundColor="brown"
        tariffBackgroundColor="brown"
      />
      <CardStructure
        name="Безлимитный 550"
        tariff="550"
        speed="до 100 Мбит/сек"
        capacity="Объем включенного трафика не ограничен"
        nameBackgroundColor="darkgreen"
        tariffBackgroundColor="darkgreen"
        size="120px"
      />
      <CardStructure
        name="Безлимитный 1000"
        tariff="1000"
        speed="до 200 Мбит/сек"
        capacity="Объем включенного трафика не ограничен"
        nameBackgroundColor="darkviolet"
        tariffBackgroundColor="darkviolet"
      />
    </React.Fragment>
  );
}

export default CardList;
