import { Link, useNavigate } from "react-router-dom"
import facebookLogo from "../images/Facebook-Logo-2005-2015.png"
import googleLogo from "../images/Google-logo.png"

import { IoCloseSharp, IoCartOutline, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import Nav2 from "../Files/Nav2"
import Nav from "../Files/Nav"
import { toast } from "react-toastify"
function Reg() {

    const { darkbg, setDarkbg, updateModal, url, err, setErr, dateToday } = useContext(myContext)
    const navigate = useNavigate()

    const [verify, setVerify] = useState("")
    const [cur_ver, setCur_Ver] = useState("")
    const [showModal, setShowModal] = useState(true)

    const [user, setUser] = useState({ user_name: "", email: "", phone: "", image: "", role_id: "", password: "", address: "", gender: "" })
    const [userID, setUserID] = useState({ user_name: "", email: "", phone: "", image: "", role_id: "", password: "", address: "", gender: "" })


    const createUser = () => {
        if (user.user_name === "" || user.address === "" || user.email === "" || user.phone === "" || user.image === "" || user.password === "" || user.gender === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/users`, {
                method: "POST",
                body: myForm
            }).then(resp => resp.json())
                .then((data) => {
                    setCur_Ver(data)
                    if (data.success === false) {
                        toast.error("Email is already taken")
                    }
                    else {
                        setShowModal(true)
                    }
                })
        }
    }

    const myForm = new FormData()
    myForm.append("user_name", user.user_name)
    myForm.append("address", user.address)
    myForm.append("email", user.email)
    myForm.append("phone", user.phone)
    myForm.append("password", user.password)
    myForm.append("gender", user.gender)
    myForm.append("emp_date", dateToday())
    myForm.append("role_id", "63b5786af12ca3d559688b2b")
    myForm.append("image", user.image)
    // myForm.append("verified_at", "")
    // myForm.append("expiration_date", "")



    function verifyUser() {
        if (verify === cur_ver.current_verification) {

            fetch(`${url}/users`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "user_name": cur_ver.user_name,
                    "address": cur_ver.address,
                    "email": cur_ver.email,
                    "phone": cur_ver.phone,
                    "password": cur_ver.password,
                    "gender": cur_ver.gender,
                    "emp_date": dateToday(),
                    "role_id": "63b5786af12ca3d559688b2b",
                    "image": cur_ver.image,
                    "verified_at": "verified",
                    "id": cur_ver._id,
                })

            })
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data)
                })

            toast.success("verification successful!")

            setTimeout(() => {
                navigate("/signin")
            }, 1000);
        }
        else {
            toast.error("wrong verification code!")
        }
    }




    return (
        <div>
            <Nav2 />
            <div className="modal_bg2">

                <div className="modal_bg">
                    <div className={!darkbg ? "my_modal modal_dark_txt" : "my_modal my_modal_dark"}>
                        <div className="my_modal_details">
                            <h4>Register</h4>

                            {/* <div className="my_modal_links">
                                <img src={facebookLogo} alt="" />
                                <img src={googleLogo} alt="" />
                            </div> */}

                            <div className="pt-3">
                                <form className="form_input reg_form">
                                    <div>Full name</div>
                                    <input type="text" name="user_name" className={err && user.user_name === "" ? "err" : null} placeholder={updateModal ? userID.user_name : "Full name(s)"} value={user.user_name} onChange={(e) => setUser({ ...user, user_name: e.target.value })} />

                                    <div>Email</div>
                                    <input type="email" name="email" className={err && user.email === "" ? "err" : null} placeholder={updateModal ? userID.email : "Email"} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                                    <div>
                                        <div>Mobile number</div>
                                        <input type="number" name="phone" className={err && user.phone === "" ? "err" : null} placeholder={updateModal ? userID.phone : "Mobile no"} value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                    </div>
                                    <div>
                                        <div>Password</div>
                                        <input type="password" minLength="6" name="password" placeholder="Password" className={err && user.password === "" ? "err" : null} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </div>

                                    <div>Addess</div>
                                    <input type="text" name="address" className={err && user.address === "" ? "err" : null} placeholder={updateModal ? userID.address : "Address"} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />

                                    <div className="reg_select">
                                        <div>Gender</div>
                                        <select name="gender" className={err && user.gender === "" ? "err" : null} value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })}>
                                            <option>Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Prefer not to say</option>
                                        </select>
                                    </div>

                                    <div>
                                        <div>
                                            <div>Profile photo</div>
                                            <input type="file" name="image" accept="image/*,video/*" className={err && user.image === "" ? "err" : "image_color"} onChange={(e) => setUser({ ...user, image: e.target.files[0] })} />
                                        </div>
                                    </div>

                                </form>

                                <div className="form_btn">
                                    <button onClick={() => createUser()} data-bs-toggle="modal" data-bs-target={showModal ? "#exampleModal" : null}>Register</button>
                                </div>
                                <div className="form_switch">
                                    <p>Have an account? <Link className="form_navigate" to="/signin" >Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                showModal && <div className="verify_modal_container">
                    <div className={!darkbg ? "verify_modal" : "verify_modal admin_mode_dark"}>
                        <div onClick={() => setShowModal(false)} className="modal_close"><IoCloseSharp /></div>
                        <div className="my_modal_details">
                            <div className="pt-3">
                                <div>Please enter email verification</div>

                                <div className="form_input verify_input">
                                    <input type="number" className={err && verify === "" ? "err" : null} value={verify} onChange={(e) => setVerify(e.target.value)} />
                                </div>

                                <div className="verify_btn">
                                    <div className="verify_btn_bg">
                                        <button>Resend</button>
                                    </div>
                                    <div className="verify_btn_bg">
                                        <button onClick={() => verifyUser()} style={{ backgroundColor: "#ffa600" }}>Comfirm</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Reg