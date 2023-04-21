import { Link } from "react-router-dom"

import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import google from "../images/google_play_badge.png"
import apple from "../images/app_store_badge.png"

import { useContext } from "react"
import { myContext } from "../../myContext"

function Footer() {
    const {darkbg, logo} = useContext(myContext)
    return (
        <div className={!darkbg ?"footer_bg": "footer_bg darkNav"}>
            <div className="footer_body">
                <div className="footer_items">
                    <ul>
                        <b>About Us</b>
                        <li> <Link className="footer_links">About us Overview</Link> </li>
                        <li> <Link className="footer_links">Our History</Link> </li>
                        <li> <Link className="footer_links">Leadership Team</Link> </li>
                        <li> <Link className="footer_links">News and Notifications</Link> </li>
                        <li> <Link className="footer_links">Our branches</Link> </li>
                    </ul>
                    <ul>
                        <b>Services</b>
                        <li> <Link className="footer_links">Services Overview</Link> </li>
                        <li> <Link className="footer_links">Home Delivery</Link> </li>
                        <li> <Link className="footer_links">Payment on Delivery</Link> </li>
                        <li> <Link className="footer_links">Outdoor services</Link> </li>
                        <li> <Link className="footer_links">Special Treats</Link> </li>
                    </ul>
                    <ul>
                        <b>Contact Us</b>
                        <li> <Link className="footer_links">Contact Us</Link> </li>
                        <li> <Link className="footer_links">Products/Staff Review</Link> </li>
                        <li> <Link className="footer_links">Donations</Link> </li>
                        <li> <Link className="footer_links">Suggestions</Link> </li>
                        <li> <Link className="footer_links">Customer Feedback</Link> </li>
                        <li> <Link className="footer_links">Frequently Asked Questions</Link> </li>
                    </ul>
                    <ul>
                        <b>Shop with Us</b>
                        <li> <Link className="footer_links">Why shop with Us?</Link> </li>
                        <li> <Link className="footer_links">Special Discounts</Link> </li>
                        <li> <Link className="footer_links">Birthday packages</Link> </li>
                        <li> <Link className="footer_links">Special Surprice packages</Link> </li>
                        <li> <Link className="footer_links">Wedding packages</Link> </li>
                    </ul>
                </div>

                <div className="footer_contacts">
                    <section>
                        <b>Connect With Us Via</b>
                        <div className="footer_socials">
                            <Link><img src={facebook} alt="" /></Link>
                            <Link><img src={twitter} alt="" /></Link>
                            <Link><img src={instagram} alt="" /></Link>
                            <Link><img src={youtube} alt="" /></Link>
                        </div>
                    </section>
                    <section>
                        <b>Coming Soon...</b>
                        <div className="google_apple">
                            <Link><img src={google} alt="" /></Link>
                            <Link><img src={apple} alt="" /></Link>
                        </div>
                    </section>
                </div>

                <div className="footer_line"></div>

                <div className="footer_bottom">
                    <div className="footer_privacy">
                        <p>Privacy</p>
                        <p>Terms & Conditions</p>
                        <p>Accessibility</p>
                    </div>
                    <div className="footer_image">
                        <section>
                            <Link to="/" ><img src={logo} alt="logo" /></Link>
                        </section>
                        <section>
                            All Rights Reserved
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer