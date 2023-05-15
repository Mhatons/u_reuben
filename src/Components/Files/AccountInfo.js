import { useContext } from "react"
import { myContext } from "../../myContext"
import { IoChatbubbleEllipsesOutline, IoPersonOutline, IoReceiptOutline } from "react-icons/io5"

import slide1 from "../images/burger-4953465_1920.jpg"
import slide2 from "../images/pizza-3010062_1920.jpg"
import slide3 from "../images/fried-chicken-4977369_1920.jpg"
import slide4 from "../images/smoothie-1578240_1920.jpg"
import slide5 from "../images/burger-7831127_1920.jpg"
import slide6 from "../images/burger-7690927_1920.jpg"

import delivery from "../images/delivery-guy-1424808-removebg-preview.png"
import { Link, useNavigate } from "react-router-dom"

function AccountInfo() {
    const { profilePics, login, setLogin, userInfo, url, darkbg, } = useContext(myContext)
    const navigate = useNavigate()

    return (
        <div>
            <center className={login ? "accountInfo" : "accountInfo"}>
                {
                    login && <section className="">
                        <section className={profilePics ? "pt-3 pb-2": null}>
                            {
                                !userInfo.image ? 
                                <div style={{
                                fontSize: "2em",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "50%",
                                width: "25%",
                                color: "#424242",
                                paddingBottom: "7px",
                                }}> 
                                <IoPersonOutline /> 
                            </div>: <div 
                                className="hel">
                                    {profilePics}
                                </div>
                            }
                            
                            <b className=" text-dark">Hi, {userInfo.user_name}</b>
                        </section>
                        <section className="account_banner  text-dark">
                            <div>
                                <span
                                 role="button"
                                  onClick={() => navigate(`/profile/${userInfo._id}`)}> 
                                  <IoPersonOutline /> 
                                </span>
                                <p>Account</p>
                            </div>
                            <div>
                                <span
                                 role="button" onClick={() => navigate(`/cart`)}
                                > 
                                    <IoReceiptOutline />
                                </span>
                                <p>Orders</p>
                            </div>
                            <div>
                                <span role="button"> 
                                <IoChatbubbleEllipsesOutline />
                                </span>
                                <p>Messages</p>
                            </div>
                        </section>
                    </section>
                }

                {
                    !login && <section style={{ paddingBottom: "1em" }}>
                        <section className="pt-4">
                            <div className="null_profile_pics mb-4"> <IoPersonOutline /> </div>
                            <b className="text-dark mt-3">Welcome to UncleReuben</b>
                        </section>
                        {
                            !login && 
                            <section className="acount_no_login">
                                <div className="account_login_btn">
                                    <Link to='/reg'><button className="btn_reg">Register</button></Link>
                                </div>
                                <div className="account_login_btn">
                                    <Link to="/signin" ><button className="btn_sign">sign in</button></Link>
                                </div>
                            </section>
                        }
                    </section>
                }
                <section className="account_banner_slider">
                    <div>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-1">
                                <div className="carousel-item active">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide1} alt="..." />
                                            <b className="account_banner_price pri_color">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide2} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide3} alt="..." />
                                            <b className="account_banner_price">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide4} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide5} alt="..." />
                                            <b className="account_banner_price">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide6} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={!darkbg ? "promo": "promo darkNav"}>
                            <div className="delivery_img">
                                <img src={delivery} alt="delivery" />
                            </div>
                        </div>

                    </div>


                </section>
            </center>
        </div>
    )
}

export default AccountInfo