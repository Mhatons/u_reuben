import { useContext, useState } from "react";
import { myContext } from "../../myContext";
import { IoCloseSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";

const VerifyModal = ({fun}) => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const code = useRef("")
    const { setShowModal, darkbg, otpCode, url, dateToday, logo, resendOtp, setOtpCode, setLogin, setAdminLogin, success, error, setAwaitLogin } = useContext(myContext)
    const navigate = useNavigate()

    function handleChange(e, index) {
        if (isNaN(e.value)) return false;
        setOtp([...otp.map((data, i) => (i === index ? e.value : data))]);

        if (e.nextSibling) e.nextSibling.focus()
        if (otp !== "") {

        }

    }

    function handleDelete(e, index) {
        if (e.key === "Backspace" && e.target.previousSibling) {
            e.preventDefault()
            e.target.previousSibling.focus()

            setOtp([...otp.map((data, i) => (i !== index ? data : ""))])
        }
        else if (e.key === "Backspace" && !e.target.previousSibling && e.target.nextSibling) {
            e.preventDefault()
            setOtp([...otp.map((data, i) => (i !== index ? data : ""))])
        }
    }

    useEffect(() => {
        code.current = otp.join("")
        verifyUser(code.current)
    }, [otp])





function handlePaste(e){
    const value = e.clipboardData.getData("text")
    // if(isNaN(value)) return false
// console.log(value.toString().split(""))
    setOtp(value.toString().split(""))
    e.target.lastSibling.focus()
    // console.log(otp)
// console.log(e.clipboardData.getData("text"))
}

    const myForm = new FormData()
    myForm.append("email", otpCode.email)
    myForm.append("password", otpCode.password)
    myForm.append("emp_date", dateToday())
    myForm.append("role_id", "63b5786af12ca3d559688b2b")
    myForm.append("verified_at", "verified")
    myForm.append("id", otpCode._id)


    const verifyUser = (e) => { 
        console.log(otpCode)
        if (e.length === 6 && e === otpCode.current_verification) {

            fetch(`${url}/users`, {
            method: "PUT",
            body: myForm
            })
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data)
                    setOtpCode("")
                        setAwaitLogin(false)
                     success("Login successful")
                            setLogin(true)
                            console.log(data.user)
                            const user = data;
                            // const user = data.user;
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
                })
            success("verification successful!")
            setShowModal(false)
            setAwaitLogin(true)
        }
        else if (e.length === 6 && e !== otpCode.current_verification) {
            error("wrong verification code!")
        }
    }



    



    return (
        <div className="">
            <div className="verify_modal_container">
                <div className={!darkbg ? "verify_modal" : "verify_modal darkMode"}>
                    <div onClick={() => setShowModal(false)} className="modal_close"><IoCloseSharp /></div>
                    <div className="verify_modal_details">
                        <div className={!darkbg ? "form_switch text-dark": "form_switch"}>
                            <div className="verify_modal_details_img"><img src={logo} alt="logo" /></div>
                            <p>Please enter the six digit code sent to your email to verify your account</p>
                        </div>

                        <div className="d-flex m-auto verify_modal_inputs pt-1">
                            {
                                otp.map((data, index) => {
                                    return (
                                        <input
                                        key={index}
                                            type="text" 
                                            onPaste={(e)=>handlePaste(e)}
                                            value={data}
                                            maxLength={1}
                                            onChange={(e) => handleChange(e.target, index)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => {
                                                if (e.key === "ArrowLeft" && e.target.previousSibling) {
                                                    e.target.previousSibling.focus()
                                                }
                                                else if (e.key === "ArrowRight" && e.target.nextSibling) {
                                                    e.target.nextSibling.focus();
                                                }

                                                handleDelete(e, index)
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>

                        <div className="form_switch">
                            <p>Didn't get the code? <span onClick={() => fun()} className="form_navigate" >Resend</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyModal;