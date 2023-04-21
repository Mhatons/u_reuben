import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{backgroundColor: "black", padding: "4em 0em 12em", color: "white" }}>
            <div style={{ width: "50%", margin: "auto", textAlign: "center"}}>
                <h1>404</h1>
                <p>Page Not Found...</p>
                <div className="cartBtn">
                    <Link to="/"><button>Click here to go back</button></Link>
                </div>
            </div>
        </div>
    )
}