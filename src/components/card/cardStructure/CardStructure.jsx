import React from "react";
import styles from "./cardStructure.module.css";

function CardStructure(props) {
  const nameStyle = {
    backgroundColor: props.nameBackgroundColor,
    height: props.size,
  };
  const tariffStyle = { backgroundColor: props.tariffBackgroundColor };

  return (
    <div className={styles.container}>
      <h4 style={nameStyle} className={styles.name}>
        {props.name}
      </h4>
      <section style={tariffStyle} className={styles.tariff}>
        {props.tariff}
        <br></br>
        <span className={styles.conditions}> руб/мес</span>
      </section>
      <section className={styles.speed}>{props.speed}</section>
      <footer className={styles.capacity}>{props.capacity}</footer>
    </div>
  );
}

export default CardStructure;
