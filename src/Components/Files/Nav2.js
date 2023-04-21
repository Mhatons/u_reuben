import { IoCartOutline, IoList, IoGrid, IoHeartSharp, IoAddCircleSharp, IoRemoveCircleSharp, IoChevronUpSharp  } from "react-icons/io5"
// import { TfiLayoutAccordionSeparated } from "react-icons/tfi"
import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { Link, useNavigate } from "react-router-dom"
function Nav2() {

    const { login, cart, darkbg, logo, reverseCategories, adminLogin, clearItem, userInfo, toAdmin, setDarkbg, nightMode, dayMode, more, setMore, grid, setGrid, toTopPage, showMore, setShowMore } = useContext(myContext)
    const navigate = useNavigate()
    


    window.onscroll = function () { myFunction() };
    function myFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            setShowMore(true)
        }
        else {
            setShowMore(false)
            setMore(false)
        }
    }

    return (
        <div className="Nav2">
            <div className="mode_changer">
                {
                    !darkbg && <div className="darkmode" onClick={() => setDarkbg(true)}> {nightMode}
                    </div>
                }
                {
                    darkbg && <div className="lightmode" onClick={() => setDarkbg(false)}>{dayMode}
                    </div>

                }
            </div>
            
            {
                showMore && <div className="show_more">

                    {/* <div className="show_pageUp_event">
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
                    </div> */}
                </div>
            }

            <div className={darkbg ? "darkNav" : null}>
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <section className="nav2_logo">
                            <Link to="/" ><img src={logo} alt="logo" /></Link>
                        </section>

                        <button className="navbar-toggler" type="button btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="nav-item dropdown collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{ fontSize: "18px", color: "gray" }}><IoList /></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><b>Categories</b></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                {
                                    reverseCategories.map((data, i) => {
                                        return (
                                            <li> <Link className="categoty_li dropdown-item">{i + 1} <span className="ps-5 pe-5">{data.name}</span></Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="order_btn collapse navbar-collapse" id="navbarSupportedContent">
                            <Link to="/products" ><button className="btn btn-warning">Order Now</button></Link>
                        </div>

                        {
                            toAdmin &&
                            <div className="order_btn collapse navbar-collapse" id="navbarSupportedContent">
                                <Link to="/admin" ><button className="btn btn-danger">Data Page</button></Link>
                            </div>
                        }

                        {
                            login && <div className="cart_in_nav">
                                <Link to="/cart" className="cart"><IoCartOutline /></Link>
                                <div className="cart_no">{cart}</div>
                            </div>
                        }

                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <section className="nav2_center">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className="nav_search">
                                    <input type="text" placeholder="Search" />
                                </div>

                            </ul>
                        </section>

                        {
                            !login && <div>
                                <Link to="/signin" className={!darkbg ? "nav2_links": "nav2_links nav2_links_light text-light"}>Sign in</Link>
                            </div>
                        }

                        {
                            login && <section className="unmedia_profile d_flex">
                                <div className="nav-item dropdown">
                                    <a className="nav-link text-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b className={darkbg ? "text-light" : "text-dark"}>{userInfo.user_name}</b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={() => navigate(`/profile/${userInfo._id}`)} href="#">Profile</a></li>
                                        <li><a className="dropdown-item" onClick={() => { navigate("/"); clearItem() }}><div className="point">Sign out</div></a></li>
                                    </ul>
                                </div>
                            </section>
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav2