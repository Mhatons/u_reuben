import { useContext } from "react"
import { IoLocation, IoCartOutline, IoList } from "react-icons/io5"
import { BsCalendarEventFill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { myContext } from "../../../myContext"
function Admin_nav() {

    const { login, setLogin, cart, darkbg, logo, clearItem, dateToday, userInfo } = useContext(myContext)
    const navigate = useNavigate()

    // function getToday() {
    //     let date = new Date().toLocaleDateString()
    //     return date
    // }

    return (
        <div>
            <div className="admin_nav">
                <div className={darkbg ? "darkNav" : null}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid nav_flex">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="d-flex">
                                <div className="clock">
                                   {/* <input type="date" value={getToday()}/> */}
                                    {dateToday()}
                                </div>
                                <div onClick={() => navigate("/")} className="back_to_web">
                                    Go to Website
                                </div>
                            </div>

                            <section>
                                <div className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b className="admin_name">{userInfo.user_name}</b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><a className="dropdown-item" href="#"><div className="point" onClick={() => { clearItem(); navigate("/") }}>Sign out</div></a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Admin_nav