import Footer from "../Files/Footer"
import Nav2 from "../Files/Nav2"

import Usefluter from '../Files/Flutter'


import { IoTrashSharp } from "react-icons/io5"
import Nav from "../Files/Nav"
import wave from "../images/wave.png"
import no_cart from "../images/EleOsAnim.webp"
import logo from "../images/Logo UncleReuben.png"
import { useContext } from "react"
import { myContext } from "../../myContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import Button from "../Button"

function CartPage() {

    const { darkbg, url, userInfo, orders, deleteProduct, dateToday, cartSum, setCartSum, success, error, spin } = useContext(myContext)

    const products = [...orders].reverse()
    const navigate = useNavigate()



    const [payment, setPayment] = useState("")

    function getTotal() {
        let sum = 0
        products.map((data) => {
            return(
                sum += parseInt(data.amount)
            )
        })
        return sum
    }

    function getTotalDelivery() {
        let sum = 0
        products.map((data) => {
            return(
                sum += parseInt(data.delivery_fee)
            )
        })
        return sum
    }

    function getProductNames() {
        let myproducts = ""
        let myArr = []
        products.map((data) => {
            let names = ` ( ${data.title}, ${data.quantity}, N${data.amount}) ~ `
            myArr.push(names).toString()
            myproducts = myArr.toString()
        })
        return myproducts
    }

    setCartSum(getTotal() + getTotalDelivery())

    function getPayment(event) {
        setPayment(event.target.value);
    }


    const placeOrder = () => {
        if (payment === "") {
            error("Select payment method")
        }
        else {
            fetch(`${url}/sales`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "user_id": userInfo._id,
                    "branch_id": products[0].branch_id,
                    "delivery_method": products[0].delivery_method,
                    "date": dateToday(),
                    "amount": getTotal(),
                    "delivery_fee": getTotalDelivery(),
                    "status": "pending",
                    "product_details": getProductNames(),
                    "payment_method": payment
                })
            })
                .then(resp => resp.json())
                .then((data) => {
                    success("Order successfully processed")
                    setTimeout(() => {
                        deleteOrder(data.user_id)   
                    }, 1000);
                })
        }
    }

    function deleteOrder(id) {
        fetch(`${url}/orders/mine/${id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            <div>
                <Nav />
                <Nav2 />

                <section className={!darkbg ? "cart_page" : "cart_page pb-3 darkMode"}>
                    <section className={!darkbg ? "cart_header" : "cart_header darkMode"}>
                        <div>UncleReuben Grills</div>
                        <div id="my_scroll_container" style={{ backgroundColor: "transparent" }}>
                            <div id="my_scroll_img">
                                <img src={wave} alt="wave" />
                                <img src={wave} alt="wave" />
                            </div>
                        </div>
                    </section>
                    {
                        products.length > 0 ? (
                            <section className="cart_details">
                                <div className="cart_details_one">
                                    <div className={!darkbg ? "address" : "address darkNav"}>
                                        <h6>Delivery Address</h6>
                                        <div>
                                            <div> {userInfo.user_name} <span> {userInfo.phone} </span></div>
                                            <div> {userInfo.address} </div>
                                            <div>Nigeria</div>
                                        </div>
                                    </div>

                                    <div className={!darkbg ? "payment" : "payment darkNav"}>
                                        {/* <div className="payment_type"> */}
                                        <h6>Payment Method</h6>
                                        <div onChange={(e) => getPayment(e)}>
                                            <div className="delivery_type"><input type="radio" id="later" name="payment" value="pay_later" /> <label htmlFor="later" >Payment on Delivery</label></div>
                                            <div className="delivery_type"><input type="radio" id="now" name="payment" value="pay_now" /> <label htmlFor="now">Pay Now</label></div>
                                        </div>
                                        {/* </div> */}
                                    </div>

                                    <div className="cart_items">
                                        {
                                            products.length ? (
                                                products.map((data, i) => {
                                                    return (
                                                        <div className={!darkbg ? "cart_item" : "cart_item darkNav"} key={i} >
                                                            <div className="cart_item_img">
                                                                <img src={`${url}/uploads/${data.image}`} alt="" />
                                                            </div>
                                                            <div className={!darkbg ? "cart_item_txt" : "cart_item_txt no_border"}>
                                                                <div className="cart_item_title">{data.title}</div>
                                                                <div onClick={() => deleteProduct(data._id)} className="removeCartItem"> <IoTrashSharp /> </div>
                                                                <h4>NGN{data.amount}</h4>
                                                                <div className="product_quantity_add">
                                                                    <span>-</span>
                                                                    <div>{data.quantity}</div>
                                                                    <span>+</span>
                                                                    <div className="product_discount">order from five pieces above and get one chicken shawarma free</div>
                                                                </div>
                                                                <div className="txt_sm" style={{ paddingTop: "1.5em" }}>{data.description}</div>
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <section className="cart_details_two">
                                    <div className={!darkbg ? "summary" : "summary darkNav"}>
                                        <div style={{ fontSize: "1.5em", fontWeight: "700", paddingBottom: "1em" }}>Summary</div>
                                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                            <span>Total item costs</span>
                                            <span>NGN {getTotal()}</span>
                                        </div>
                                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                            <span>Promo Code</span>
                                            <span>Enter code here</span>
                                        </div>
                                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                            <span>Total shipping</span>
                                            <span>NGN {getTotalDelivery()}</span>
                                        </div>
                                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                            <b>Total</b>
                                            <b>NGN {cartSum}</b>
                                        </div>
                                        <div>
                                            <div>
                                                {
                                                    payment === "pay_now" ? (
                                                        <div><Usefluter /></div>
                                                    ): <Button 
                                                    fn={placeOrder} 
                                                    text='Checkout' 
                                                    styles='cartBtn'
                                                    spin={<img src={spin} alt="loading..." className="spin" />}
                                                    />
                                                }
                                            </div>
                                            <div className="txt_sm">Upon clicking 'Place Order', I confirm I have read and acknowledged all terms and policies.</div>
                                        </div>
                                    </div>
                                    <div className={!darkbg ? "summary_logo" : "summary_logo darkNav"}>
                                        <img src={logo} alt="" />
                                        <div>
                                            At UncleReuben grills, your satisfaction is our priority
                                        </div>
                                    </div>
                                </section>
                            </section>
                        ) :
                            <div className="empty_cart">
                                <div>
                                    <img src={no_cart} alt="cart" />
                                    <div>Oop! You have no item in your shopping cart</div>
                                </div>
                                <div className="cartBtn">
                                    <button onClick={() => navigate("/products")}>Click here to add item</button>
                                </div>
                            </div>
                    }
                </section>

                <Footer />
            </div>
        </div>
    )
}

export default CartPage