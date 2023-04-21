import { useContext } from "react"
import { myContext } from "../../../myContext"

import { BsFillBookmarksFill, BsFillBagFill, BsFillCartFill, BsFillPeopleFill } from "react-icons/bs"

import img1 from "../admin img/shutterstock_1239007495-RT-2copy.png"
import img2 from "../admin img/smoothie.png"
import img3 from "../admin img/chico.png"
import img4 from "../admin img/Little-Marios-Ma-Wan-Hero-1024x931.png"

function Headers() {

    const {reverseUsers, reverseProduct, reverseSales, salesTotal} = useContext(myContext)

    const getUsers = reverseUsers.filter(allusers => allusers.role_id === "63b5786af12ca3d559688b2b")
    const getStaff = reverseUsers.filter(allusers => allusers.role_id !== "63b5786af12ca3d559688b2b")

    return (
        <div className="headers">
            <div className="admin_cards">
                <div className="admin_card">
                    <div className="card_body">
                        <div className="card_title">Pending Orders</div>
                        <div className="card_no">009</div>
                        <div className="card_desc">
                            <div>Total <span className="card_logs">43</span></div>
                            <div>Amount <span className="card_logs">N79,000</span></div>
                        </div>
                    </div>
                    <div className="card_img">
                        <BsFillBookmarksFill />
                    </div>
                </div>
                <div className="admin_card">
                    <div className="card_body">
                        <div className="card_title">Sales</div>
                        <div className="card_no">{reverseSales.length}</div>
                        <div className="card_desc">
                            <div>Total <span className="card_logs">43</span></div>
                            <div>Amount <span className="card_logs">N{salesTotal}</span></div>
                        </div>
                    </div>
                    <div className="card_img">
                        <BsFillCartFill />
                    </div>
                </div>
                <div className="admin_card">
                    <div className="card_body">
                        <div className="card_title">Total Users</div>
                        <div className="card_no">{reverseUsers.length}</div>
                        <div className="card_desc">
                            <div>Total Staff <span className="card_logs">{getStaff.length}</span></div>
                            <div>Total Users <span  className="card_logs">{getUsers.length}</span></div>
                        </div>
                    </div>
                    <div className="card_img">
                        <BsFillBagFill />
                    </div>
                </div>
                <div className="admin_card">
                    <div className="card_body">
                        <div className="card_title">Products</div>
                        <div className="card_no">{reverseProduct.length}</div>
                        <div className="card_desc">
                            <div>Total <span className="card_logs">43</span></div>
                            <div>Amount <span className="card_logs">N79,000</span></div>
                        </div>
                    </div>
                    <div className="card_img">
                        <BsFillPeopleFill />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Headers