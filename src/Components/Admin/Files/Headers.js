import { useContext } from "react"
import { myContext } from "../../../myContext"

import { BsFillBookmarksFill, BsFillBagFill, BsFillCartFill, BsFillPeopleFill } from "react-icons/bs"



function Headers() {

    const {reverseUsers, reverseProduct, reverseSales, salesTotal} = useContext(myContext)

    const getUsers = reverseUsers.filter(allusers => allusers.role_id === "63b5786af12ca3d559688b2b")
    const getStaff = reverseUsers.filter(allusers => allusers.role_id !== "63b5786af12ca3d559688b2b")

    const cardItems = [
    {
       title: "Pendin Orders",
       quantity: 302,
       total: 43,
       amount: 76000,
       icon: <BsFillBookmarksFill />
    },
    {
       title: "Sales",
       quantity: reverseSales.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillCartFill />
    },
    {
       title: "Products",
       quantity: reverseProduct.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillPeopleFill />
    },
    {
       title: "Users",
       quantity: getStaff.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillBagFill />
    },
]

    return (
        <div className="headers">
            <div className="admin_cards">
                {
                    cardItems.map((item) => {
                        return(
                            <div className="admin_card">
                    <div className="card_body">
                        <div className="card_title">{item.title}</div>
                        <div className="card_no">{item.quantity}</div>
                        <div className="card_desc">
                            <div>Total <span className="card_logs">{item.total}</span></div>
                            <div>Amount <span className="card_logs">{item.amount}</span></div>
                        </div>
                    </div>
                    <div className="card_img">
                        {item.icon}
                    </div>
                </div>
                        )
                    })
                }
                {/* <div className="admin_card">
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
                </div> */}

            </div>
        </div>
    )
}

export default Headers