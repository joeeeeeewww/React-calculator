import classes from './Input.module.css';
const Input = (props) => {

    return <button className={classes.button}>{props.label}</button>

}
export default Input;