import { useState } from "react";
import styles from "./Toggle.module.scss";

function Toggle(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    props.handleChange(!isChecked);
  };

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
      <input
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <span className={styles.slider_round}></span>
    </label>
      <div>
      {props.title}
      </div>

    </div>
  );
}

export default Toggle;
