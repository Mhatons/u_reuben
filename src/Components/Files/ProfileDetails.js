import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { IoTrashSharp } from "react-icons/io5"
import { BsFillPenFill } from "react-icons/bs"
import { useNavigate, useParams } from "react-router-dom"
import no_cart from "../images/EleOsAnim.webp"
import { useEffect } from "react"
import Modal from "./Modal"

import img from "../images/boy.jpg"

import background from "../images/01frozen-pizza-test1-vckz-superJumbo.jpg"

function ProfileDetails() {
    const { userInfo, orders, darkbg, url, deleteProduct } = useContext(myContext)
    const products = [...orders].reverse()
    const [details, setDetails] = useState({})
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()

    const { id } = useParams()

    //    let myImage = URL.createObjectURL(userInfo.image)

    useEffect(() => {
        fetch(`${url}/users/${id}`)
            .then(resp => resp.json())
            .then((data) => {
                setDetails(data)
            })
    }, [])

    const noEditDetails = [
        {
            id: 1,
            title: "Full name(s)",
            value: details.user_name,
        },
        {
            id: 1,
            title: "Email",
            value: details.email,
        },
        {
            id: 1,
            title: "Phone",
            value: details.phone,
        },
        {
            id: 1,
            title: "Address",
            value: details.address,
        }
    ]

     const EditDetails = [
        {
            id: 1,
            title: "Full name(s)",
            value: details.user_name,
        },
        {
            id: 1,
            title: "Email",
            value: details.email,
        },
        {
            id: 1,
            title: "Phone",
            value: details.phone,
        },
        {
            id: 1,
            title: "Address",
            value: details.address,
        }
    ]


    return (
        <div>
            <div 
            className="profile_bg"
            style={{
                backgroundImage: `url(${background})`, 
                height: "70vh",  
                backgroundSize: "cover", 
                position: "relative",
                backgroundPosition: "center" 
                }} >
                    <section className="profile_intro p-4">
                        <b className="fs-4">Hello {details.user_name}</b>
                        <p>You can manage your account and details here</p>
                        <div className="pt-3">
                            <button 
                            onClick={() => setEdit(true)}
                            type="button" 
                            style={{fontSize: "13px"}} 
                            className="btn btn-warning text-light fw-bold">Edit profile
                            </button>
                        </div>
                    </section>
                    <section className=" details_body row ms-0 me-0 gap-5">
                        <div className="details_container col-sm-12 col-md-7 col-lg-8">
                            <header className=" profile_header">
                                <p style={{fontSize: "15px"}}>My account</p>
                                <button style={{fontSize: "12px", color: "white"}} className="btn btn-info fw-bold">Settings</button>
                            </header>
                            <div className="profile_details">
                                <header>User information</header>
                                <div className="row details_holder">
                                    {
                                       !edit && noEditDetails.map((info) => {
                                            return(
                                                <div className="col-lg-6 col-md-6 col-sm-12 pb-2">
                                                    <div>{info.title}</div>
                                                    <div className="person_details">
                                                    {info.value}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                       edit && EditDetails.map((info) => {
                                            return(
                                                <div className="col-lg-6 col-md-6 col-sm-12 pb-2">
                                                    <div>{info.title}</div>
                                                    <input 
                                                    className="profile_input person_details"
                                                    type="text" 
                                                    value={info.value}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <section className=" position-relative col-sm-12 col-md-4 col-lg-3">
                            <div className="bg-light details_container">
                                <div className="profile_image">
                                    <img src={img} alt="" />
                                </div>
                                <div 
                                    className="profile_logs text-center">
                                    <div>
                                        <b>12</b>
                                        <p>Pending orders</p>
                                    </div>
                                    <div>
                                        <b>12</b>
                                        <p>Total orders</p>
                                    </div>
                                </div>
                        </div>
                        </section>
                    </section>
            </div>
        </div>
    )
}

export default ProfileDetails