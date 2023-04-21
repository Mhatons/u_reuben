import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { IoTrashSharp } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
import no_cart from "../images/EleOsAnim.webp"
import { useEffect } from "react"

function ProfileDetails() {
    const { profilePics, userInfo, orders, darkbg, url, deleteProduct, } = useContext(myContext)
    const products = [...orders].reverse()
    const [userDeatils, setUserDetails] = useState({})
    const navigate = useNavigate()
    const [image, setImage] = useState("")

    const { id } = useParams()

//    let myImage = URL.createObjectURL(userInfo.image)

    useEffect(() => {
        fetch(`${url}/users/${id}`)
            .then(resp => resp.json())
            .then((data) => {
                setUserDetails(data)
            })
    }, [])


    return (
        <div style={{backgroundImage: ""}} className={!darkbg ? "details_bg" : "details_bg darkMode"}>
            <div>
                <div className="details_header">

                </div>
                <div className="mydetails">
                    <div className="myprofile_img">
                        <div className="my_profile_details">
                        <img src={`${url}/uploads/${userDeatils.image}`} alt="item" />
                            <div>
                                <div className="detail_container">
                                    <div className={!darkbg && userDeatils.gender === "female" ? "detail_holder_female" : !darkbg && userInfo.gender === "male" ? "detail_holder_male" : "detail_holder2"}>
                                        <div> <b>Name:</b> {userDeatils.user_name}</div>
                                        <div><b>Email:</b> {userDeatils.email}</div>
                                        <div> <b>Mobile:</b> {userDeatils.phone}</div>
                                        <div> <b>Gender:</b> {userDeatils.gender}</div>
                                        <div> <b>Address:</b> {userDeatils.address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mydetails_sect">
                        <div className="myprofile_name">
                            <div className="profile_menu">
                                <div>Profile</div>
                                <div>My Orders</div>
                                <div>Edit Profile</div>
                                <div>History</div>
                                <div>Promo Voucher</div>
                            </div>

                            {/* <input type="file" onChange={(e)=> {setImage(URL.createObjectURL(e.target.files[0])); }} />
                            <img src={image} alt="" /> */}

                            <div className="cart_items my_profile_cart_bg">
                                {
                                    products.length >= 1 ? (
                                        products.map((data, i) => {
                                            return (
                                                <div className={!darkbg ? "cart_item" : "cart_item darkNav"} key={i} >
                                                    <div className="cart_item_img">
                                                        <img src={`${url}/uploads/${data.image}`} alt="" />
                                                    </div>
                                                    <div className={!darkbg ? "cart_item_txt" : "cart_item_txt no_border"}>
                                                        <div className="cart_item_title">{data.title}</div>
                                                        <div onClick={() => deleteProduct(data._id)} className="removeCartItem"> <IoTrashSharp /> </div>
                                                        <h4>NGN{data.amount}</h4>
                                                        <div className="product_quantity_add">
                                                            <span className="text-light">-</span>
                                                            <div>{data.quantity}</div>
                                                            <span className="text-light">+</span>
                                                            <div className="product_discount">order from five pieces above and get one chicken shawarma free</div>
                                                        </div>
                                                        <div className="txt_sm" style={{ paddingTop: "1.5em" }}>{data.description}</div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    ) : <div className="empty_cart my_empty_cart">
                                        <div>
                                            <img src={no_cart} alt="cart" />
                                            <div>Oop! You have no item in your shopping cart</div>
                                        </div>
                                        <div className="cartBtn">
                                            <button onClick={() => navigate("/products")}>Click here to add item</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails