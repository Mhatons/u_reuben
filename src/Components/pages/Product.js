import Footer from "../Files/Footer"
import Item from "../Files/Item"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"
import wave from "../images/wave.png"
import { useContext } from "react"
import { myContext } from "../../myContext"
import { IoLocation, IoCartOutline, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"

function Product() {
    const { login, setLogin, profilePics, cart, darkbg, setDarkbg } = useContext(myContext)
    return (
        <div>
            <div>
                <Nav />
                <div>
                    <Nav2 />
                </div>
                <section className={!darkbg ? "cart_header" : "cart_header darkMode"}>
                    <div>UncleReuben Grills</div>
                    <div id="my_scroll_container" style={{ backgroundColor: "transparent" }}>
                        <div id="my_scroll_img">
                            <img src={wave} alt="wave" />
                            <img src={wave} alt="wave" />
                        </div>
                    </div>
                </section>
                <section>
                    <Item />
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Product