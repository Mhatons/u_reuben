import { useContext } from "react";
import { myContext } from "../myContext";

const Button = ({fn, text, styles, spin}) => {
    const {btnSpinner} = useContext(myContext)
    return (
        <div className={styles}>
            <button  onClick={() => !btnSpinner ? fn(): null}>
                {!btnSpinner && text}
                {btnSpinner && spin}
            </button>
        </div>
    );
}

export default Button;