import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { myContext } from "../../../myContext"
import Admin_nav from "../Files/Admin_nav"
import Dashboard from "../Files/Dashboard"
import Headers from "../Files/Headers"
import SideBar from "../Files/SideBar"

function Admin() {
    const { userInfo } = useContext(myContext)
    const navigate = useNavigate()


    useEffect(()=>{
        
        if( userInfo.role_id === "63b5786af12ca3d559688b2b"){
            navigate("/")
        }
       
    },[])
    return (
        <div>
            {
                // userInfo.role_id !== "63b5786af12ca3d559688b2b" ? (
                    <div>
                        <div className="dashboard_top">
                            <div>
                                <SideBar />
                            </div>
                            <div className="dash_body">
                                <div>
                                    <Admin_nav />
                                </div>
                                <div className="dash_card_body">
                                    <Headers />
                                    <Dashboard />
                                </div>
                            </div>
                        </div>
                    </div>
                // ): (navigate("/"))
            }
        </div>
    )
}

export default Admin