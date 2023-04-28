import { useContext, useState } from "react";
import { myContext } from "../../myContext";
import { IoCloseSharp } from "react-icons/io5"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

const VerifyModal = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const code = useRef("")
    const { setShowModal, darkbg, otpCode, url, dateToday, logo } = useContext(myContext)
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
console.log(value.toString().split(""))
    setOtp(value.toString().split(""))
    e.target.lastSibling.focus()
    // console.log(otp)
// console.log(e.clipboardData.getData("text"))
}


    const verifyUser = (e) => { 
        if (e.length === 6 && e === otpCode.current_verification) {

            fetch(`${url}/users`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "user_name": otpCode.user_name,
                    "address": otpCode.address,
                    "email": otpCode.email,
                    "phone": otpCode.phone,
                    "password": otpCode.password,
                    "gender": otpCode.gender,
                    "emp_date": dateToday(),
                    "role_id": "63b5786af12ca3d559688b2b",
                    "image": otpCode.image,
                    "verified_at": "verified",
                    "id": otpCode._id,
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
        else if (e.length === 6 && e !== otpCode.current_verification) {
            toast.error("wrong verification code!")
        }
    }


    return (
        <div className="">
            <div className="verify_modal_container">
                <div className={!darkbg ? "verify_modal" : "verify_modal darkMode"}>
                    <div onClick={() => setShowModal(false)} className="modal_close"><IoCloseSharp /></div>
                    <div className="verify_modal_details">
                        <div className="form_switch text-dark">
                            <div className="verify_modal_details_img"><img src={logo} alt="logo" /></div>
                            <p>Please enter the six digit code sent to your email to verify your account</p>
                        </div>

                        <div className="d-flex m-auto verify_modal_inputs pt-1">
                            {
                                otp.map((data, index) => {
                                    return (
                                        <input
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
                            <p>Didn't get the code? <span className="form_navigate" >Resend</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyModal;