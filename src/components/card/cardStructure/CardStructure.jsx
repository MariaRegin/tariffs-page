import React from "react";
import styles from "./cardStructure.module.css";
import { useState } from "react";

function CardStructure(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const nameStyle = { backgroundColor: props.nameBackgroundColor };
  const tariffStyle = { backgroundColor: props.tariffBackgroundColor };
  const capacity = props.capacity;

  return (
    <div className={styles.container} onClick={handleClick}>
      <h4
        style={nameStyle}
        className={`${styles.name} ${clicked ? styles.clicked : ""}`}
      >
        {props.name}
      </h4>
      <section style={tariffStyle} className={styles.tariff}>
        {props.tariff}
        <br></br>
        <span className={styles.conditions}> руб/мес</span>
      </section>
      <section className={styles.speed}>{props.speed}</section>
      <footer className={`${styles[capacity]}`}>{props.capacity}</footer>
    </div>
  );
}

export default CardStructure;
