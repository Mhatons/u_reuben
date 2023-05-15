import { useContext } from "react"
import { IoPeopleOutline, IoPersonAddOutline, IoBriefcaseOutline, IoCashOutline, IoBusiness, IoCartOutline, IoPowerSharp, IoChatbubblesOutline, IoChevronForward, IoConstruct, IoStatsChart, IoEnter, IoExit } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { myContext } from "../../../myContext"

function SideBar() {


    const { profilePics, userName, userInfo, clearItem } = useContext(myContext)
    const navigate = useNavigate()

    const sideItems = [
        {
            icon: <IoPeopleOutline />,
            name: "Users",
            onClick: () => navigate("/admin/customers"),
        },
        {
            icon: <IoConstruct />,
            name: "Products",
            onClick: () => navigate("/admin/manage_products"),
        },
        {
            icon: <IoEnter />,
            name: "Sales",
            onClick: () => navigate("/admin/sales"),
        },
        {
            icon: <IoExit />,
            name: "Expenses",
            onClick: () => navigate("/admin/expense"),
        },
        {
            icon: <IoCartOutline />,
            name: "Categories",
            onClick: () => navigate("/admin/categories"),
        },
        {
            icon: <IoBriefcaseOutline />,
            name: "Roles",
            onClick: () => navigate("/admin/roles"),
        },
        {
            icon: <IoPersonAddOutline />,
            name: "Staff",
            onClick: () => navigate("/admin/staff"),
        },
        {
            icon: <IoBusiness />,
            name: "Branches",
            onClick: () => navigate("/admin/branch"),
        },
    ]

    return (
        <div>
            <div className="sidebar">
                <Link to="/admin" style={{textDecoration: "none"}}><div className="sidebar_header">Dashboard</div></Link>
                <div className="sidebar_user">
                    <Link to={`/profile/${userInfo._id}`}>{profilePics}</Link>
                    {/* <Link to={`/profile/${userInfo._id}`}><img src={profilePics} alt="logo" /></Link> */}
                    <div>{userInfo.user_name}</div>
                </div>

                <div className="sidebar_contents ">
                    {
                        sideItems.map((items) => {
                            return(
                                <div 
                                onClick={items.onClick}
                                className="sidebar_content point"> 
                                <span>{items.icon}</span> 
                                {items.name}
                                <IoChevronForward />
                                </div>
                            )
                        })
                    }
                    <div 
                    onClick={() => { navigate("/"); clearItem() }} 
                    className="sidebar_content bg-light text-dark"> 
                    <span><IoPowerSharp /></span>
                    Log Out
                    <IoChevronForward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar