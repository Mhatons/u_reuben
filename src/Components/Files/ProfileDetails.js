import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import {IoPersonOutline} from "react-icons/io5"

import { Image } from "cloudinary-react"

import Axios from 'axios'
import { useRef } from "react"


function ProfileDetails() {
    const { userInfo, orders, darkbg, url, logo, dateToday, awaitLogin, spinner, setAwaitLogin, setOrders } = useContext(myContext)
    const [edit, setEdit] = useState(false)
    const [showImage, setShowImage] = useState(false)
    const [allOrders, setAllOrders] = useState()

    const [pendingOrder, setPendingOrders] = useState()


    let [details, setDetails] = useState({})
    const [uploadedImage, setUploadedImage] = useState()

    const navigate = useNavigate()

    const { id } = useParams()
    // const userdata = useRef()

    useEffect(() => {
        Axios.get(`${url}/users/${id}`)
        .then(response => {
                setDetails(response.data)
            })

        Axios.get(`${url}/sales/user/${id}`)
        .then(response => {
                setAllOrders(response.data.length)
            })

        //  fetch(`${url}/sales/user/${id}`)
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         if (data) {
        //             setAllOrders(data)
        //         }
        //     })

            fetch(`${url}/orders/mine/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                if (data) {
                    setPendingOrders(data.length)
                }
            })
        // fetch(`${url}/users/${id}`)
        //     .then(resp => resp.json())
        //     .then((data) => {
        //         setDetails(data)
        //         userdata.current = data
        //     })

    }, [details])



    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const noEditDetails = [
        {
            id: 1,
            title: "Full name(s)",
            value: details.user_name? details.user_name: "user",
        },
        {
            id: 1,
            title: "Email",
            value: details.email,
        },
        {
            id: 1,
            title: "Phone",
            value: details.phone? details.phone: "phone",
        },
        {
            id: 1,
            title: "Address",
            value: details.address? details.address: "address",
        }
    ]

     const EditDetails = [
        {
            id: 1,
            title: "Full name(s)",
            value: details.user_name,
            fn: (e) => setName(e.target.value),
            disabled: false,
            type: "text"
        },
        {
            id: 1,
            title: "Email",
            value: details.email,
            disabled: true
        },
        {
            id: 1,
            title: "Phone",
            value: details.phone,
            fn: (e) => setPhone(e.target.value),
            disabled: false,
            type: "number"
        },
        {
            id: 1,
            title: "Address",
            value: details.address,
            fn: (e) => setAddress(e.target.value),
            disabled: false,
            type: "text"
        }
    ]

    const myForm = new FormData()
    myForm.append("user_name", details.user_name? details.user_name: "user")
    myForm.append("address", details.address? details.address: "address")
    myForm.append("email", details.email)
    myForm.append("phone", details.phone? details.phone: "phone")
    myForm.append("password", details.password)
    myForm.append("emp_date", dateToday())
    myForm.append("role_id", details.role_id)
    myForm.append("image", uploadedImage)
    myForm.append("verified_at", "verified")
    myForm.append("id", details._id)

    function editImage(){
        setAwaitLogin(true)

        // Axios.put(`${url}/users`, myForm)
        //     .then((resp) => {
        //         console.log(resp)
        //     })

        fetch(`${url}/users`, {
            method: "PUT",
            body: myForm
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(userInfo._id === details._id){
                    localStorage.setItem("user", JSON.stringify(data))
                }
                setAwaitLogin(false)
                setShowImage(false)
            })
    }

    const uploadImage = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "mhatons1")

        Axios.post("https://api.cloudinary.com/v1_1/dy4nvvdwd/image/upload", formData)
        .then((resp) => {
            setUploadedImage(resp.data.secure_url)
            setShowImage(true)
        })
    }



    const newForm = new FormData()
    newForm.append("user_name", name)
    newForm.append("address", address)
    newForm.append("email", details.email)
    newForm.append("phone", phone)
    newForm.append("password", details.password)
    newForm.append("emp_date", dateToday())
    newForm.append("role_id", details.role_id)
    newForm.append("image", details.image)
    newForm.append("verified_at", "verified")
    newForm.append("id", details._id)

    const handleChange = () => {
        setAwaitLogin(true)
        fetch(`${url}/users`, {
            method: "PUT",
            body: newForm
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(userInfo._id === details._id){
                    localStorage.setItem("user", JSON.stringify(data))
                }
                setAwaitLogin(false)
            })
    }

    function scrollBottom(){
        window.scrollTo(0,400)
    }



    return (
        <div>
            {
                awaitLogin && 
                    <div 
                        id="awaitlogin">
                        <img src={spinner} 
                        alt="spinner" 
                        className="spinner" />
                    </div>
            }
            <div 
            className="profile_bg"
            style={{
                backgroundImage: `url(${details.image})`, 
                
                position: "relative",
                backgroundPosition: "top",
                backgroundSize: "cover",
                height: "70vh"
                }} >
                    
                    <div className="profile_nav">User Profile</div>
                    <Link to="/" className="profile_nav_logo">
                        <img src={logo} alt="" />
                    </Link>
                    <section className="profile_intro p-4">
                        <b className="fs-4">Hello {details.user_name}</b>
                        <p>You can manage your account details here</p>
                        <div className="profile_edit_btn pt-3">
                            <button 
                            onClick={() => {scrollBottom(); edit == true? setEdit(false): setEdit(true)}}
                            type="button" 
                            style={{fontSize: "13px"}} 
                            className={`btn ${!edit? "btn-warning": "btn-danger"} text-light fw-bold`}>
                               {
                                !edit && " Edit profile"
                               }
                               {
                                edit && " Abort Edit"
                               }
                            </button>
                        </div>
                    </section>

                    <section className=" details_body row ms-0 me-0">
                        <div className="details_container col-sm-12 col-md-7 col-lg-8">
                            <header className=" profile_header">
                                <p style={{fontSize: "15px"}}>My account</p>
                                <button style={{fontSize: "12px", color: "white"}} className="btn btn-info fw-bold">Settings</button>
                            </header>
                            <div className="profile_details">
                                {
                                    !edit && <header>User information</header>
                                }
                                {
                                    edit && <header>Update user information</header>
                                }
                                <div className="row details_holder">
                                    {
                                       !edit && noEditDetails.map((info, i) => {
                                            return(
                                                <div key={i} className="col-lg-6 col-md-6 col-sm-12 pb-2">
                                                    <div>{info.title}</div>
                                                    <div className="person_details">
                                                    {info.value}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                       edit && 
                                       EditDetails.map((info, i) => {
                                            return(
                                                <div key={i} className="col-lg-6 col-md-6 col-sm-12 pb-2">
                                                    <div>{info.title}</div>
                                                    <input 
                                                    className="profile_input person_details"
                                                    type={info.type} 
                                                    placeholder={info.value}
                                                    onChange={info.fn}
                                                    disabled = {info.disabled}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                        edit &&                                     
                                        <button 
                                        onClick={() => handleChange()}
                                        className="
                                        w-100
                                        btn btn-dark
                                        mt-3">
                                        Submit
                                        </button>
                                    }

                                </div>
                            </div>
                        </div>

                        <div className=" details_stopper position-relative col-sm-12 col-md-4 col-lg-3">
                            <div id="profile_img_log" className="bg-light  details_container">
                                <div className="profile_image">
                                    
                                    {
                                        showImage && <img src={uploadedImage} alt="" />
                                    }
                                    {
                                        !showImage && !details.image? 
                                        <span style={{
                                            paddingBottom: "0.1em",
                                            color: "silver", 
                                            fontSize: "7em", 
                                            textAlign: "center", 
                                            backgroundColor: "light", 
                                            float: "right", 
                                            width: "100%" 
                                        }}>
                                            <IoPersonOutline />
                                        </span>: 
                                        !showImage && details.image?
                                        <Image cloudName="dy4nvvdwd" publicId={ details.image} />: null
                                    }
                                    <div id="img_btn">
                                        {
                                            !showImage && userInfo._id === details._id ?
                                            <>
                                            <label style={{cursor: "pointer"}} htmlFor="change_img">Change</label>
                                            <input 
                                            id="change_img"
                                            type="file"
                                            onChange={uploadImage}/>
                                            </>: null
                                        }
                                    {
                                        showImage && <div
                                         style={{cursor: "pointer"}} 
                                        className="text-warning" 
                                        onClick={() => editImage()}>Save change
                                        </div>
                                    }
                                    </div>
                                </div>
                                <div 
                                    className="profile_logs text-center">
                                    <div>
                                        <b>{pendingOrder}</b>
                                        <p>Pending orders</p>
                                    </div>
                                    <div>
                                        <b>{allOrders}</b>
                                        <p>Total orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    )
}

export default ProfileDetails