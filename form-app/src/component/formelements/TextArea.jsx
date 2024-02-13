import { useState } from "react";
import styles from "./TextArea.module.scss"

function TextArea(props) {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    props.handleChange(e.target.value);
  };

  return (
    <div className={styles.textAreaCustom}>
      <label >{props.title.toUpperCase()}</label>
      <textarea
        id="text-area"
        name="text-area"
        rows="2"
        col="50"
        value={textValue}
        placeholder={props.placeholder}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
