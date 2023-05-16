import { Link, useNavigate, useParams } from "react-router-dom"
import img1 from "../images/1647019464547.jpeg"
import img2 from "../images/smoothie.jfif"
import img3 from "../images/pizza.webp"
import img4 from "../images/IMG_delicious-chicken-table-848x565.jpg"
import img5 from "../images/chips22.jpg"
import img6 from "../images/Chicken-Shawarma-Recipe-S5.jpg"
import { useContext, useEffect } from "react"
import { myContext } from "../../myContext"
import Button from "../Button"

import { IoLocation, IoCheckmarkCircleSharp } from "react-icons/io5"
import { useState } from "react"
import { toast } from "react-toastify"

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
import FlipCards from "./Flip_cards"

function Item() {

    const { darkbg, url, reverseProduct, reverseBranch, err, userInfo, cart, login, dateToday, setErr, orders, discount, discountRate } = useContext(myContext)
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const rand = [...reverseProduct].slice(0, 5)
    const gallery = [...reverseProduct].slice(6, 11)
    const sideItems = [...reverseProduct].slice(0, 6)
    const [homeDelivery, setHomeDelivery] = useState(false)

    const [sale, setSale] = useState({ branch_id: "" })
    const [itemNum, setItemNum] = useState(1)
    const [delivery, setDelivery] = useState("")

    const navigate = useNavigate()

    function delivery_fee() {
        let fee = 0
        if (delivery === "home_delivery") {
            fee = 700
        }
        return fee
    }


    function getID(e) {
        fetch(`${url}/products/${e}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data)
            })
    }

    useEffect(() => {
        getID(id)
    }, [])

    const addNum = () => {
        setItemNum(itemNum + 1)
    }
    function minusNum() {
        let num = itemNum - 1
        if (num <= 0) {
            setItemNum(0)
        }
        else {
            setItemNum(num)
        }
    }


    function getDelivery(event) {
        setDelivery(event.target.value);
    }

    // const myproduct = {
    //     "user_id": userInfo._id,
    //     "product_id": product._id,
    //     "branch_id": sale.branch_id,
    //     "delivery_method": delivery,
    //     "date": dateToday(),
    //     "quantity": itemNum,
    //     "amount": product.price * itemNum,
    //     "image": product.image,
    //     "description": product.description,
    //     "title": product.title,
    //     "delivery_fee": delivery_fee()
    // }
    function addQuantity(a, b) {
        // let sum = a + b
        let sum = (Number(a)) + Number(b)
        return sum
    }

    function createOrder() {
        fetch(`${url}/orders`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "user_id": userInfo._id,
                "product_id": product._id,
                "branch_id": sale.branch_id,
                "delivery_method": delivery,
                "date": dateToday(),
                "quantity": itemNum,
                "amount": product.price * itemNum,
                "image": product.image,
                "description": product.description,
                "title": product.title,
                "delivery_fee": delivery_fee()
            })
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    const notify = () => {
        if (err === false) {
            toast.error("Ensure no fields are empty")
        }
    }



    function createSale() {
        orders.length >= 1 ? (
            orders.map((data) => {
                return (
                    data.product_id === product._id ? (
                        fetch(`${url}/orders`, {
                            method: "put",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                "user_id": userInfo._id,
                                "product_id": product._id,
                                "branch_id": sale.branch_id,
                                "delivery_method": delivery,
                                "date": dateToday(),
                                "quantity": (Number(data.quantity)) + Number(itemNum),
                                "amount": product.price * Math.round(addQuantity((Number(data.quantity)), Number(itemNum))),
                                "image": product.image,
                                "description": product.description,
                                "title": product.title,
                                "delivery_fee": delivery_fee(),
                                "id": data._id
                            })
                        })
                            .then(resp => resp.json())
                            .then((data) => {
                                console.log(data)
                            })
                    ) : (createOrder())
                )


            })
        ) : createOrder()

    }

    function checkOrder() {
        orders.map((data) => {
            fetch(`${url}/orders`, {
                method: "patch",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "quantity": (Number(data.quantity)) + Number(itemNum),
                    "id": data._id
                })
            })
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data)
                })
        })
    }

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
            id: 5,
            image1: chi,
            image2: chi2,
            name: "Chips",
            price: 2100
        }
    ]




    return (
        <div className={darkbg ? "darkMode" : "product_bg"} style={{ paddingBottom: "2em" }}>
            <div className="product">
                <div className="product_details">
                    <div className="product_img_gallery">
                        <div className="product_img">
                            <div className="current_product_image">
                                <img src={`${url}/uploads/${product.image}`} alt="" />
                                <div className=" sm_product_price text-center fs-3 fw-bolder pb-3">
                                    NGN {discount(product.price)}
                                </div>
                            </div>
                            <div className="product_xImgs">
                                {
                                    gallery.map((data, i) => {
                                        return (
                                            <Link key={i} className="product_xImgs_img" onClick={() => getID(data._id)}>
                                                <img src={`${url}/uploads/${data.image}`} key={i} alt="" />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={!darkbg ? "product_attr" : "product_attr product_attr2 darkNav"}>
                        <div className="product_price">
                            Get the <span style={{ color: "gold", fontWeight: "700" }}>{product.title}</span> for as low as <span className="text-danger fst-italic">NGN {discount(product.price)}</span> instead of <span className="text-decoration-line-through fst-italic">NGN {product.price}</span> <span className="text-warning"> Enjoy - {discountRate}% discount</span>
                        </div>
                        {/* <div className="product_size">
                            <div>Size</div>
                            <select className="product_size_select">
                                <option value="">select desired size</option>
                                <option value="">small</option>
                                <option value="">medium</option>
                                <option value="">large</option>
                            </select>
                        </div> */}
                        <div className="usr_product_quantity">
                            <div>Quantity</div>
                            <div className="product_quantity_add">
                                <span onClick={() => minusNum()}>-</span>
                                <div className="quantity_input">
                                    <input value={itemNum} />
                                </div>
                                <span onClick={() => addNum()}>+</span>
                                <div className="product_discount">order from five pieces above and get one chicken shawarma free</div>
                            </div>
                        </div>

                        <div className="closer_branch">
                            <div>Please select the branch closest to you</div>
                            <select className={err && sale.branch_id === "" ? "err closer_branch_select" : "closer_branch_select"} value={sale.branch_id} onChange={(e) => setSale({ ...sale, branch_id: e.target.value })}>
                                <option>Select branch</option>
                                {
                                    reverseBranch.map((data, i) => {
                                        return (
                                            <option value={data._id} key={i}>{data.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="product_delivery">
                            <div className={err && delivery === "" ? "err_delivery" : null}>Delivery Method</div>
                            <div onChange={(e) => getDelivery(e)}>
                                <div onClick={() => setHomeDelivery(false)} className="delivery_type"><input type="radio" id="office" name="delivery" value="office" /> <label htmlFor="office" >Office Pickup</label></div>
                                {
                                    !homeDelivery && <div>
                                        <span>
                                            You have choosen pickup branch as your preffered method of delivery.
                                            Please select the branch closest and most convinient to you
                                        </span>
                                        <div className="logistics">
                                        </div>
                                    </div>
                                }
                                <div onClick={() => setHomeDelivery(true)} className="delivery_type"><input type="radio" id="home" name="delivery" value="home" /> <label htmlFor="home">Home Delivery</label></div>
                                {
                                    homeDelivery && <div>
                                        <span>
                                            We offer delivery services to all locations within Awka and environs, and our delivery charge ranges from N700 above,
                                            greatly determined by distance and time.
                                        </span>
                                        <div className="logistics">
                                            <div>Locate the nearest <span style={{ fontSize: "14px" }}><IoLocation /></span> UncleReuben store to you</div>
                                            you can always reach our logistics team via +234486848286
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>



                        <div className="product_btn">
                            <div className="product_buy_btn">
                                <button onClick={() => { !login ? navigate("/signin") : sale.branch_id === "" || delivery === "" ? setErr(true) || notify() : createSale() || navigate("/cart") }}>Buy Now</button>
                            </div>
                            <div className="pro_add2Cart_btn">
                                <button onClick={() => { !login ? navigate("/signin") : sale.branch_id === "" || delivery === "" ? setErr(true) || notify() : createSale() }} data-bs-toggle="modal" data-bs-target={!login && sale.branch_id === "" || delivery === "" ? null : "#exampleModal"}>Add to Cart</button>
                            </div>
                        </div>





                        {/* <!-- Modal --> */}
                        <div className="modal modal-lg fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div> <span className="text-success fs-4"><IoCheckmarkCircleSharp /></span> <span className="text-dark">A new item has beeen added to your shopping cart, you now have <span style={{ color: "#ff4000", fontWeight: "700", fontSize: "17px" }}>{cart}</span> pending order(s)</span> </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <Link to={"/cart"} ><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Continue Cart Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div className="product_order">
                            <div>Special Order</div>
                            <span>
                                Orders for special events that demands the production of goods in large quantity should be directed to the admin
                                <div>
                                    <div>Admin contacts;</div>
                                    <div>phone no. 091794240977</div>
                                    <div>email: admin@gmail.com</div>
                                </div>
                            </span>
                        </div>
                        <div className="product_delivery">
                            <div>About this product</div>
                            <span>{product.description}</span>
                        </div>
                    </div>
                </div>
                <div className="check_products">
                    <div style={{ fontFamily: "cursive", textAlign: "center", paddingBottom: "0.5em" }}>Check these out too</div>
                    <div>
                        {
                            sideItems.length ? (
                                sideItems.map((data, i) => {
                                    return (
                                        <div className="check_products_items" key={i} >
                                            <Link 
                                            onClick={() => getID(data._id)}>
                                                <img src={`${url}/uploads/${data.image}`} alt="" />
                                            </Link>
                                            <div>From NGN {data.price}</div>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                </div>
            </div >


            <section className={!darkbg ? "flip_sect_bg" : "flip_sect_bg darkNav"}>
                <div className="flip_sect">
                    <div className="flip_header">
                        <b>More Variety for your pleasure</b>
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

                <section className={!darkbg ? "homeBanner_products_bg" : "darkMode"}>
                    <div className="homeBanner_products">
                        <div className="sub_header d_flex">
                            <div>
                                EXPLORE OUR PRODUCTS
                            </div>
                            <div className="">
                                <>CATEGORIES</>
                            </div>
                        </div>
                        <div>
                            {
                                rand.length ? (
                                    rand.map((data, i) => {
                                        return (
                                            <div key={i} className="homeProduct_sect">
                                                <section className="homeProduct_img">
                                                    <img src={`${url}/uploads/${data.image}`} alt="" />
                                                    {/* <div className="btn_shop">
                                                        <Link className="btn_shop_header" to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                                                    </div> */}
                                                </section>
                                                <section className="homeProduct_txt">
                                                    <h2>{data.title}</h2>
                                                    <p>Order our exceptionally tasty & nutritious <span className="text-warning fst-italic">{data.title}</span> for as low as <span className=" fw-bolder text-danger">N{discount(data.price)}</span> instead of <span className="text-muted fst-italic text-decoration-line-through">N{data.price}</span> when you shop with us online</p>
                                                    <div>{data.description}</div>
                                                    <div className="homeProduct_btn">
                                                        <div><Link to="/products" ><button>See More</button></Link></div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                ) : null
                            }
                        </div>
                    </div>
                </section>
            </section>
        </div >
    )
}

export default Item