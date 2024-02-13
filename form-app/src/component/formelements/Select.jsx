import { useState } from "react"
import styles from "./Select.module.scss"

function Select (props) {
    const [value,setValue]= useState(props.data || "Kazakhstan")

    const handleInput = (e) => {
        setValue(e.target.value);
        props.handleChange(e.target.value);
    };
    return(
    <div className={styles.selectCustom}>
        <label>{props.title.toUpperCase()}</label>
        <select 
        name="allselect"
        id="allselect"
        value={value}
        onChange={handleInput}
        >
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
        </select>
    </div>)
}
export default Select;