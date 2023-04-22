import { placeholder } from "@cloudinary/react";

const Button = ({fn, text, styles}) => {
    return (
        <div className={styles}>
            <button onClick={() => fn()}>
                {text}
            </button>
        </div>
    );
}

export default Button;