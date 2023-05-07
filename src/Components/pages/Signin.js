import { Link, useNavigate } from "react-router-dom"
import facebookLogo from "../images/Facebook-Logo-2005-2015.png"
import googleLogo from "../images/Google-logo.png"

import { IoLocation, IoCartOutline, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"
import React, { useContext, useRef, useState } from "react"
import { myContext } from "../../myContext"
import Nav2 from "../Files/Nav2"
import Nav from "../Files/Nav"
import { toast } from "react-toastify"
import Button from "../Button"
import VerifyModal from "../Files/VerifyModal"
import { useEffect } from "react"

function Signin() {

    const { darkbg, setDarkbg, url, err, setErr, setUserInfo, setLogin, setAdminLogin, spin, setBtnSpinner, setShowModal, showModal, btnSpinner, setOtpCode } = useContext(myContext)


    const [user, setUser] = useState({ email: "", password: "" })

    const userEmail = useRef()
    // const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const logUser = () => {
        if (user.email === "" || user.password === "") {
            setErr(true)
        }
        else {
            setBtnSpinner(true)

            fetch(`${url}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data)

                    if (data.message === "incorrect user password") {
                        toast.error("Incorrect password")
                    }
                    else if (data.message === "user does not exist") {
                        toast.error("User does not exist")
                    }
                    setBtnSpinner(false)
                    setTimeout(() => {
                        if (data.success && data.user.verified_at === "verified") {
                            toast.success("Login successful")
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
                            }, 1000)
                        }
                        else if (data.success && data.user.verified_at !== "verified") {
                            toast.warn("User not verified")
                            setShowModal(true)
                            resendOtp(data)
                        }
                    }, 100)
                    // console.log(data.user)
                    // console.log(data.user.verified_at)
                    setTimeout(() => {
                        setBtnSpinner(false)
                        setShowModal(false)
                    }, 2000)
                }).catch(err => console.log(err))
        }

    }




    const myForm = new FormData()
    myForm.append("email", user.email)
    myForm.append("name", user.user_name)
    myForm.append("gender", user.gender)

    // console.log(user.email)

    // useEffect(() => {
    //     userEmail.current = user.email
    // }, [user])

    function resendOtp() {
        try {
            fetch(`${url}/users/otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "email": user.email })
            })
                .then(resp => resp.json())
                .then((data) => {
                    setOtpCode(data)
                })
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <Nav2 />
            <Nav />
            <div className="modal_bg1">

                <div className="modal_bg">
                    <div className={!darkbg ? "my_modal sign_modal modal_dark_txt" : "my_modal my_modal_dark sign_modal"}>
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

                                <Button fn={logUser} spin={<img src={spin} alt="loading..." className="spin" />} text="sign in" styles={btnSpinner? "form_btn formBtn_dark": "form_btn"} />


                                {
                                    showModal && <VerifyModal fun={resendOtp} />
                                }
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
