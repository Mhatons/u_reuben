import { useState } from "react"
import AccountInfo from "./AccountInfo"
import CategoryList from "./CategoryList"
import HomeSilder from "./HomeSlider"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../../myContext"
import Button from "../Button"

function Home_banner() {

    const { darkbg, spinner, url, reverseProduct, toTopPage, discount } = useContext(myContext)
    const [bridge, setBridge] = useState(false)

    const sliceProduct = [...reverseProduct].slice(0,10)

    return (
        <div className={darkbg ? "darkMode" : "home_banner_bg"}>
            <center className="">
                <section className="row homeBanner">
                    <div className=" col-lg-3">
                        <CategoryList />
                    </div>
                    <div className="col-lg-6">
                        <HomeSilder />
                    </div>
                    <div className="col-lg-3">
                        <AccountInfo />
                    </div>
                </section>

                <section className="home_bridge">
                    <h3><span className="text-white">UncleReuben</span> <span className="text-warning">Restaurant & Grills</span></h3>
                    <div className="bridgeImages">
                    </div>
                </section>

                <section className={!darkbg ? "homeBanner_products_bg" : "darkMode"}>
                    <div className="homeBanner_products">
                        <div className={
                            darkbg ? 
                            "darkNav sub_header d_flex": 
                            "sub_header d_flex"}>
                            <div>
                                EXPLORE OUR PRODUCTS
                            </div>
                            <div className="">
                                <>CATEGORIES</>
                            </div>
                        </div>
                        
                        <div>
                            {
                                sliceProduct.length ? (
                                    sliceProduct.map((data, i) => {
                                        return (
                                            <div className="homeProduct_sect" key={i}>
                                                <section className="homeProduct_img">
                                                    <img src={`${url}/uploads/${data.image}`}  alt="" />
                                                </section>
                                                <section className="homeProduct_txt">
                                                    <h2 className="homeProduct_title">{data.title}</h2>
                                                    <p>Order our exceptionally tasty & nutritious <span className="text-warning fst-italic">{data.title}</span> for as low as <span className=" fw-bolder text-danger">N{discount(data.price)}</span> instead of <span className="text-muted fst-italic text-decoration-line-through">N{data.price}</span> when you shop with us online</p>
                                                    <div className="homeProduct_desc">{data.description}</div>
                                                    <div className="homeProduct_btn">
                                                        <div><Link onClick={() => toTopPage()} to="/products" ><button>See More</button></Link></div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                ) : <img src={spinner} alt="spinner" className="spinner" />
                            }
                        </div>
                    </div>
                </section>
            </center>
        </div>
    )
}

export default Home_banner