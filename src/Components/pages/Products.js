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


function Products() {
    const { darkbg } = useContext(myContext)
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
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={sha} alt="image" />
                                            </div>
                                            <div className="flip_img2 image_radius">
                                                <img src={sha2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Sharwama</span> <div></div>
                                            <span className="item_gallery_price">From NGN 2100</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={paf} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={paf2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Parfait</span> <div></div>
                                            <span className="item_gallery_price">From NGN 2100</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={piz} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={piz2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Pizza</span> <div></div>
                                            <span className="item_gallery_price">From NGN 6100</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={smo} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={smo2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Smoothie</span> <div></div>
                                            <span className="item_gallery_price">From NGN 900</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={chi} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={chi2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Chips</span> <div></div>
                                            <span className="item_gallery_price">From NGN 1200</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={bug} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={bug2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Burger</span> <div></div>
                                            <span className="item_gallery_price">From NGN 2900</span>
                                        </div>
                                    </div>
                                    <div className="flip_box">
                                        <div className="flip_images item_gallery_container">
                                            <div className="flip_img1">
                                                <img src={chik} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={chik2} alt="image" />
                                            </div>
                                        </div>
                                        <div className="item_gallery_txt">
                                            <span className="item_gallery_name">Chicken</span> <div></div>
                                            <span className="item_gallery_price">From NGN 2900</span>
                                        </div>
                                    </div>
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