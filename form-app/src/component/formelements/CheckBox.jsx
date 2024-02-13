import { useState } from "react";
import styles from "./CheckBox.module.scss";

function CheckBox(props) {
    const [checked, setChecked] = useState(props.data || false);

    const handleInput = () => {
        setChecked(!checked);
        props.setProps(!checked);
    };

    return (
        <>
            <input
                type="checkbox"
                id="check"
                name="check"
                checked={checked}
                onChange={handleInput}
                className={styles.checkBoxCustom}
            />
            <label htmlFor="check" className={styles.labelCustom}>{props.title}</label>
        </>
    );
}

export default CheckBox;
