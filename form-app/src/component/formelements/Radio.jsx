import { useState } from "react";
import styles from "./Radio.module.scss";

function Radio(props) {
  const [value, setValue] = useState(props.data || "");

  const handleInput = (e) => {
    setValue(e.target.value);
    props.handleChange(e.target.value);
  };

  return (
    <div className={styles.radioCustom}>
      <label >{props.title.toUpperCase()}</label>
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="standard"
          name="radioGroup"
          value="standard"
          checked={value === "standard"}
          onChange={handleInput}
        />
        <label htmlFor="standard">Standard</label>
      </div>
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="priority"
          name="radioGroup"
          value="priority"
          checked={value === "priority"}
          onChange={handleInput}
        />
        <label htmlFor="priority">Priority</label>
      </div>
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="premium"
          name="radioGroup"
          value="premium"
          checked={value === "premium"}
          onChange={handleInput}
        />
        <label htmlFor="premium">Premium</label>
      </div>
    </div>
  );
}

export default Radio;
