import { useContext } from "react";
import { myContext } from "../myContext";

const Button = ({fn, text, styles, spin}) => {
    const {spinner} = useContext(myContext)
    return (
        <div className={styles}>
            <button  onClick={() => !spinner ? fn(): null}>
                {!spinner && text}
                {spinner && spin}
            </button>
        </div>
    );
}

export default Button;