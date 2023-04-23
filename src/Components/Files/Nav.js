import { IoCartOutline, IoList, IoGrid, IoHeartSharp, IoAddCircleSharp, IoRemoveCircleSharp, IoChevronUpSharp } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { Link, useNavigate } from "react-router-dom"
import Button from "../Button"

function Nav() {

    const { login, cart, darkbg, logo, reverseCategories, clearItem, userInfo, toAdmin, setDarkbg, nightMode, dayMode, more, setMore, toTopPage, showMore, setShowMore } = useContext(myContext)
    const navigate = useNavigate()

    return (
        <div className={darkbg ? "darkNav" : null}>
            <div className="mode_changer">
                {
                    !darkbg && <div className="nightmode" onClick={() => setDarkbg(true)}> {nightMode}
                    </div>
                }
                {
                    darkbg && <div className="lightmode" onClick={() => setDarkbg(false)}>{dayMode}
                    </div>

                }
            </div>
            {
                showMore && <div className="show_more">

                    <div className="show_pageUp_event">
                        {
                            more && <div className="">
                                <div onClick={() => toTopPage()} className="more_events"> <IoChevronUpSharp /> </div>
                            </div>
                        }
                    </div>
                    <div className="show_signs">
                        {
                            !more && <span onClick={() => setMore(true)}> <IoAddCircleSharp /> </span>
                        }
                        {
                            more && <span onClick={() => setMore(false)}> <IoRemoveCircleSharp /> </span>
                        }
                    </div>
                </div>
            }



            <div className="nav_sm">
                <section className="nav2_logo">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                </section>


                {/* {
                    toAdmin &&
                    <div className="order_btn collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to="/admin" ><button className="btn btn-danger">Data Page</button></Link>
                    </div>
                } */}

                {
                    login && <div className="cart_in_nav">
                        <Link to="/cart" className="cart"><IoCartOutline /></Link>
                        <div className="cart_no">{cart}</div>
                    </div>
                }

                <div>
                    <div>
                        <div style={{ fontSize: "18px", color: "gray" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <IoList />
                        </div>
                    </div>

                    <div class={!darkbg ? "offcanvas offcanvas-start" : "offcanvas offcanvas-start darkMode"} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            {
                                login && <div className="nav-item dropdown">
                                    <a className="nav-link text-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b className={darkbg ? "text-light" : "text-dark"}>{userInfo.user_name}</b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={() => navigate(`/profile/${userInfo._id}`)} href="#">Profile</a></li>
                                        <li><a className="dropdown-item" onClick={() => { navigate("/"); clearItem() }}><div className="point">Sign out</div></a></li>
                                    </ul>
                                </div>
                            }
                            {
                                !login && <div>
                                    <Link to="/signin" className={!darkbg ? "nav2_links" : "nav2_links nav2_links_light text-light"}>Sign in</Link>
                                </div>
                            }
                            <button type="button" style={{ backgroundColor: "white" }} class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">

                            <section className="nav2_center">
                                <div className="nav_search_sm">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </section>

                            <div>
                                <b>Menu</b>
                                {
                                    reverseCategories.map((data, i) => {
                                        return (
                                            <Link className={!darkbg ? "categoty_li dropdown-item" : "categoty_li dropdown-item text-light"}>{i + 1} <span className="ps-5 pe-5">{data.name}</span></Link>
                                        )
                                    })
                                }
                                <Link to="/products"><Button text="Order now" styles="cartBtn" /></Link>

                                {
                                    toAdmin && <Link to="/admin"><Button text="Data Page" styles="cartBtn dataBtn" /></Link>
                                }

                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                            </div>
                            <div class="dropdown mt-3">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav