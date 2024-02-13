import styles from "./Button.module.scss"
function Button (props) {
    return(
    <button type={props.type} className={styles.buttonCustom}>
        {props.title.toUpperCase()}
    </button>
    )
}
export default Button;