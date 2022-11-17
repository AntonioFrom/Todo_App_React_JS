import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {

  const {  children,  disabled = false } = props

  return (
    <button
       {...props}
      className={styles.form_button}
            disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
