import { useContext } from "react"
import { myContext } from "../../myContext"
import Footer from "../Files/Footer"
import Items from "../Files/Items"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"

import sha from "../images/333163018_117208274632470_8841863388902976207_n.jpg"
import sha2 from "../images/pngimg.com - shawarma_PNG34.png"
import piz from "../images/pizza-5179939_1920.jpg"
import piz2 from "../images/pizza-3010062_1920.jpg"
import bug from "../images/burger-7831127_1920.jpg"
import bug2 from "../images/burger-4953465_1920.jpg"
import smo from "../images/cranberries-1334507_1920.jpg"
import smo2 from "../images/Blackberry-smoothie.jpg"
import chi from "../images/burger-7690927_1920.jpg"
import chi2 from "../images/fourChips.webp"
import chik from "../images/IMG_delicious-chicken-table-848x565.jpg"
import chik2 from "../images/fried-chicken-4977369_1920.jpg"
import paf from "../images/smoothie-1578240_1920.jpg"
import paf2 from "../images/smoothie-1444351_1920.jpg"
import { Link } from "react-router-dom"
import FlipCards from "../Files/Flip_cards"


function Products() {
    const { darkbg } = useContext(myContext)

    const cardItems = [
        {
            id: 1,
            image1: sha,
            image2: sha2,
            name: "Shawarma",
            price: 2100
        },
        {
            id: 2,
            image1: paf,
            image2: paf2,
            name: "Parfait",
            price: 2100
        },
        {
            id: 3,
            image1: piz,
            image2: piz2,
            name: "Pizza",
            price: 2100
        },
        {
            id: 4,
            image1: smo,
            image2: smo2,
            name: "Smoothie",
            price: 2100
        },
        {
            id: 4,
            image1: chi,
            image2: chi2,
            name: "Chips",
            price: 2100
        },
        {
            id: 4,
            image1: bug,
            image2: bug2,
            name: "Burger",
            price: 2100
        },
        {
            id: 4,
            image1: chik,
            image2: chik2,
            name: "Chicken",
            price: 2100
        },
    ]
    return (
        <div className="products">
            <div>
                <Nav />
                <Nav2 />
                <section className={!darkbg ? "scroll_bg" : "scroll_bg darkMode text-dark"}>
                    <div className="scroll_header">
                        <div className="scroll_header_bg">
                            <div id="my_scroll_container">
                                <div id="scroll_text">
                                    <b className="scroll_txt pe-5">Shop for your surest: <span style={{ color: "brown" }}>Sharwama</span>, <span className="text-dark">Barbecue</span>, <span className="text-success">Pizza</span>, <span style={{ color: "blue" }}>Smoothie</span>, <span style={{ color: "brown" }}>Popcorn</span> </b>
                                </div>
                            </div>

                            <div className="item_gallery">
                                {
                                    cardItems.map((info) => {
                                        return(
                                            <FlipCards
                                            key = {info.id}
                                            img1 = {info.image1}
                                            img2 = {info.image2}
                                            name = {info.name}
                                            price = {info.price}
                                            />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </section>
                <Items />
                <Footer />
            </div>
        </div>
    )
}

export default Products