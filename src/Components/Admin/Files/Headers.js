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
       icon: <BsFillBookmarksFill />,
       id: 1
    },
    {
       title: "Sales",
       quantity: reverseSales.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillCartFill />,
       id: 2
    },
    {
       title: "Products",
       quantity: reverseProduct.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillPeopleFill />,
       id: 3
    },
    {
       title: "Users",
       quantity: getStaff.length,
       total: 43,
       amount: salesTotal,
       icon: <BsFillBagFill />,
       id: 4
    },
]

    return (
        <div className="headers">
            <div className="admin_cards">
                {
                    cardItems.map((item) => {
                        return(
                            <div className="admin_card" key={item.id}>
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
            </div>
        </div>
    )
}

export default Headers