import { useContext } from "react"
import { myContext } from "../../myContext"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"
import ProfileDetails from "../Files/ProfileDetails"

function Profile(){
    const {darkbg} = useContext(myContext)
    return(
        <div>
            <div>
                {/* <Nav />
                <Nav2 /> */}
                <ProfileDetails />
            </div>
        </div>
    )
}

export default Profile