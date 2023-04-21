import { useContext } from "react"
import { IoPeopleOutline, IoPersonAddOutline, IoBriefcaseOutline, IoCashOutline, IoBusiness, IoCartOutline, IoPowerSharp, IoChatbubblesOutline, IoChevronForward, IoConstruct, IoStatsChart, IoEnter, IoExit } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { myContext } from "../../../myContext"
function SideBar() {

    const { profilePics, userName, userInfo, clearItem } = useContext(myContext)
    const navigate = useNavigate()

    return (
        <div>
            <div className="sidebar">
                <Link to="/admin" style={{textDecoration: "none"}}><div className="sidebar_header">Dashboard</div></Link>
                <div className="sidebar_user">
                    <Link to={`/profile/${userInfo._id}`}><img src={profilePics} alt="logo" /></Link>
                    <div>{userInfo.role_id}</div>
                </div>

                <div className="sidebar_contents">
                    <Link to="/admin/customers" className="sidebar_content"> <span><IoPeopleOutline /></span> Manage Users <IoChevronForward /></Link>
                    <Link to="/admin/manage_products" className="sidebar_content"> <span><IoConstruct /></span> Manage Products <IoChevronForward /></Link>
                    <Link to="/admin/sales" className="sidebar_content"> <span><IoEnter /></span> Sales <IoChevronForward /></Link>
                    <Link to="/admin/expense" className="sidebar_content"> <span><IoExit /></span> Expenses <IoChevronForward /></Link>
                    <Link to="/admin/categories" className="sidebar_content"> <span><IoCartOutline /></span> Manage Category <IoChevronForward /></Link>
                    <Link to="/admin/roles" className="sidebar_content"> <span><IoBriefcaseOutline /></span> Manage Roles <IoChevronForward /></Link>
                    {/* <div className="sidebar_content"> <span><IoStatsChart /></span>Check Progress <IoChevronForward /></div>
                    <div className="sidebar_content"><span><IoChatbubblesOutline /></span>Customer Reviews <IoChevronForward /></div> */}
                    <Link to="/admin/staff" className="sidebar_content"> <span><IoPersonAddOutline /></span> Staff Management <IoChevronForward /></Link>
                    <Link to="/admin/branch" className="sidebar_content"> <span><IoBusiness /></span> Manage Branches  <IoChevronForward /></Link>
                    <div onClick={() => { navigate("/"); clearItem() }} className="sidebar_content sidebar_logout"> <span><IoPowerSharp /></span>Log Out<IoChevronForward /></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar