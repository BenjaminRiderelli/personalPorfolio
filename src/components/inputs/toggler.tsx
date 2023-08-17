import React from "react";
import styles from "./toggler.module.css";

export interface ToggleProps {
  isChecked: boolean;
  handleChange: (params: any) => void;
}

const Toggler = ({ isChecked, handleChange }: ToggleProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="toggle_checkbox"
        checked={isChecked}
        className={`${isChecked ? styles.isNotChecked : styles.isChecked } ${
          styles.toggleCheckbox
        }`}
        onChange={handleChange}
      />
      <label htmlFor="toggle_checkbox" className={styles.label}>
        <div className={styles.starWrapper}>
          <div className={`${styles.star} ${styles.starOne}`}>
            ★
          </div>
          <div className={`${styles.star} ${styles.starTwo}`} >
            ★
          </div>
        </div>
        <div className={styles.moon}></div>
      </label>
    </div>
  );
};

export default Toggler;
