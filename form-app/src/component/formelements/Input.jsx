import { useState } from "react";
import styles from "./Input.module.scss"

export default function Input(props) {
    const [value, setValue] = useState(props.data || '');

    const handleInput = (e) => {
        setValue(e.target.value);
        props.handleChange(e.target.value);
    };

    return (
        <div className={styles.inputCustom}>
        <label >{props.title.toUpperCase()}</label>
            <input
            type={props.type || "text"}
            name="all"
            id="all"
            value={value}
            placeholder={props.placeholder || "Default Placeholder"}
            pattern={props.pattern}
            onChange={handleInput}
        />
        </div>
    );
}
