import { useContext } from "react"
import { myContext } from "../../myContext"
import Footer from "../Files/Footer"
import Items from "../Files/Items"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"

import img1 from "../images/Chicken-Shawarma.jpg"
import img2 from "../images/smoothie.jfif"
import img3 from "../images/pizza.webp"
import img4 from "../images/Blackberry-smoothie.jpg"
import img5 from "../images/chips22.jpg"
import img6 from "../images/Chicken-Shawarma-Recipe-S5.jpg"
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
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img1} alt="image" />
                                            </div>
                                            <div className="flip_img2 image_radius">
                                                <img src={img2} alt="image" />
                                                <div className="flip_img_details">
                                                    N5,000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img2} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={img2} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img3} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={img2} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img4} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={img2} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img5} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={img2} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flip_box">
                                        <div className="flip_images">
                                            <div className="flip_img1">
                                                <img src={img6} alt="image" />
                                            </div>
                                            <div className="flip_img2">
                                                <img src={img2} alt="image" />
                                            </div>
                                        </div>
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