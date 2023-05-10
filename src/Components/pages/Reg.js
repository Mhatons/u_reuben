import { Link } from "react-router-dom"
// import facebookLogo from "../images/Facebook-Logo-2005-2015.png"
// import googleLogo from "../images/Google-logo.png"


import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import Nav2 from "../Files/Nav2"
import Nav from "../Files/Nav"
import VerifyModal from "../Files/VerifyModal"
import Button from "../Button"
import Input from "../input/Input"
function Reg() {

    const { darkbg, setDarkbg, updateModal, url, err, setErr, dateToday, setOtpCode, setBtnSpinner, spin, showModal, setShowModal, btnSpinner, error } = useContext(myContext)


    const [user, setUser] = useState({ email: "", confirmPassword: "", password: ""})
    const [userID, setUserID] = useState({ user_name: "", email: "", phone: "", image: "", role_id: "", password: "", address: "", gender: "" })

    const [unmatch, setUnmatch] = useState(false)


//     const handleChange = (event) => {
//     setPassword(event.target.value);
//     setPasswordsMatch(event.target.value === confirmPassword);
//   };


    const createUser = () => {
        
        if ( user.email === "" || user.confirmPassword === "" || user.password === "" ) {
            setErr(true)
        }
        if(user.password !== user.confirmPassword){
            setUnmatch(true)
        }
        else {
            setUnmatch(false)
            setBtnSpinner(true)
            fetch(`${url}/users`, {
                method: "POST",
                body: myForm
            }).then(resp => resp.json())
                .then((data) => {
                    console.log(data)
                    setOtpCode(data)
                    if (data.success === false) {
                        error("email already assigned")
                        setBtnSpinner(false)
                    }
                    else {
                        setShowModal(true)
                        setBtnSpinner(false)
                    }
                })
        }
    }


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





    const myForm = new FormData()
    // myForm.append("user_name", user.user_name)
    // myForm.append("address", user.address)
    myForm.append("email", user.email)
    // myForm.append("phone", user.phone)
    myForm.append("password", user.password)
    // myForm.append("gender", user.gender)
    myForm.append("emp_date", dateToday())
    myForm.append("role_id", "63b5786af12ca3d559688b2b")
    // myForm.append("image", user.image)





    return (
        <div>
            <Nav2 />
            <Nav />
            <div className="modal_bg2">

                <div className="modal_bg">
                    <div className={`${darkbg ? "my_modal_dark": null} h-75 mt-5 modal_dark_txt my_modal`}>
                        <div className="my_modal_details">
                            <h4 className={`${darkbg ? "text-light": null}`}>Register</h4>

                            {/* <div className="my_modal_links">
                                <img src={facebookLogo} alt="" />
                                <img src={googleLogo} alt="" />
                            </div> */}

                            <div className="pt-3">
                                <form className="form_input reg_form">
                                    {/* <div>Full name</div>
                                    <input type="text" name="user_name" className={err && user.user_name === "" ? "err" : null} placeholder={updateModal ? userID.user_name : "Full name(s)"} value={user.user_name} onChange={(e) => setUser({ ...user, user_name: e.target.value })} /> */}

                                    <div>Email</div>
                                    <input type="email" 
                                    className={err && user.email === "" ? "err" : null} 
                                    placeholder={updateModal ? userID.email : "Email"} 
                                    value={user.email} 
                                    onChange={(e) => setUser({ ...user, email: e.target.value })} />

                                    {/* <div>
                                        <div>Mobile number</div>
                                        <input type="number" name="phone" className={err && user.phone === "" ? "err" : null} placeholder={updateModal ? userID.phone : "Mobile no"} value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                    </div> */}
                                    <div>
                                        <div>Password</div>
                                        <input type="password" 
                                        minLength={6} 
                                        placeholder="Password" 
                                        className={err && user.password === "" ? "err" : null} 
                                        value={user.password} 
                                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </div>

                                    <div>
                                        <div>Confirm Password</div>
                                        <input type="password" 
                                        minLength={6} 
                                        placeholder="comfirm password" 
                                        className={err && user.confirmPassword === "" ? "err" : null} 
                                        // value={user.confirmPassword} 
                                        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                                        {
                                            unmatch && <span className="text-danger">Password does not match</span>
                                        }
                                    </div>

                                    {/* <Input text={"Confirm password"}
                                    styles={err && user.confirmPassword === "" ? "err" : null}
                                    value={user.confirmPassword}
                                    type="password" 
                                    fn={(e) => setUser({ ...user, confirmPassword: e.target.value })} 
                                    /> */}

                                    {/* <div>Addess</div>
                                    <input type="text" name="address" className={err && user.address === "" ? "err" : null} placeholder={updateModal ? userID.address : "Address"} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} /> */}

                                    {/* <div className="reg_select">
                                        <div>Gender</div>
                                        <select name="gender" className={err && user.gender === "" ? "err" : null} value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })}>
                                            <option className="d-none">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Prefer not to say</option>
                                        </select>
                                    </div> */}

                                    {/* <div>
                                        <div>
                                            <div>Profile photo</div>
                                            <input type="file" name="image" accept="image/*,video/*" className={err && user.image === "" ? "err" : "image_color"} onChange={(e) => setUser({ ...user, image: e.target.files[0] })} />
                                        </div>
                                    </div> */}

                                </form>
                                
                                <Button  fn={createUser} spin={<img src={spin} alt="loading..." className="spin" />} text="Register" styles={btnSpinner? "form_btn formBtn_dark": "form_btn"} />
                                
                                <div className="form_switch" >
                                    <p>Have an account? <Link className={`form_navigate ${darkbg? "text-light": null}`}  to="/signin" >Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                showModal && <VerifyModal fun={resendOtp} />
            }

        </div>
    )
}


export default Reg