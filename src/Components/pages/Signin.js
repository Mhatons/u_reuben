import { Link, useNavigate } from "react-router-dom"
import facebookLogo from "../images/Facebook-Logo-2005-2015.png"
import googleLogo from "../images/Google-logo.png"

import { IoLocation, IoCartOutline, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"
import React, { useContext, useState } from "react"
import { myContext } from "../../myContext"
import Nav2 from "../Files/Nav2"
import Nav from "../Files/Nav"
import { toast } from "react-toastify"

function Signin() {

    const { darkbg, setDarkbg, url, err, setErr, setUserInfo, setLogin, setAdminLogin, } = useContext(myContext)


    const [user, setUser] = useState({ email: "", password: "" })
    // const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const logUser = () => {
        if (user.email === "" || user.password === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data)
                    
                    if (data.message === "incorrect user password") {
                        toast.error("incorrect user password")
                    }
                    else if (data.message === "user does not exist") {
                        toast.error("user does not exist")
                    }
                    setTimeout(() => {
                        if (data.success && data.user.verified_at === "verified") {
                            toast.success("login successful")
                            setLogin(true)
                            const user = data.user;
                            localStorage.setItem("user", JSON.stringify(user))

                            setTimeout(() => {
                                if (user.role_id === "63b5786af12ca3d559688b2b") {
                                    navigate("/")
                                }
                                else {
                                    setAdminLogin(true)
                                    navigate("/admin")
                                }
                            }, 1000);
                        }
                        else if (data.success && data.user.verified_at !== "verified"){
                            toast.warn("User not verified")
                            // fetch(`${url}/users/resend`, {
                            //     method: "POST",
                            //     headers: { "Content-Type": "application/json" },
                            // })
                            //     .then(resp => resp.json())
                            //     .then((data) => {
                            //         console.log(data)
                            //     })
                        }
                    }, 1000)
                    console.log(data.user)
                    console.log(data.user.verified_at)
                }).catch(err => console.log(err))
        }

    }



    return (
        <div>
            <Nav2 />
            <div className="modal_bg1">

                <div className="modal_bg">
                    <div className={!darkbg ? "my_modal sign_modal" : "my_modal my_modal_dark sign_modal"}>
                        <div className="my_modal_details">
                            <h4>Sign In</h4>
                            {/* <div className="my_modal_links">
                                <img src={facebookLogo} alt="" />
                                <img src={googleLogo} alt="" />
                            </div> */}
                            <div className="pt-3">
                                <div className="form_input reg_form">
                                    <div>
                                        <div>Email</div>
                                        <input type="text" className={err && user.email === "" ? "err" : null} placeholder="Enter your email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    </div>
                                    <div>
                                        <div>Password</div>
                                        <input type="password" className={err && user.password === "" ? "err" : null} placeholder="Enter your password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form_btn">
                                    <button onClick={() => logUser()} >sign in</button>
                                </div>
                                {/* <div className={message === "login successful" ? "msg msg_suc": "msg"}>{message}</div> */}
                                <div className="form_switch">
                                    <p>Not a member? <Link className="form_navigate" to="/reg" >Sign up now</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
