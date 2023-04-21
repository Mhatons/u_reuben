
import { useContext, useState } from "react"
import { IoGrid, IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { myContext } from "../../../myContext"
import { toast } from "react-toastify"

function Customers() {

    const { grid, setGrid, darkbg, modal, setModal, updateModal, setUpdateModal, reverseUsers, url, deleteStaff, spinner, err, setErr, dateToday } = useContext(myContext)

    const [user, setUser] = useState({ user_name: "", email: "", phone: "", image: "", role_id: "", password: "", address: "", gender: "" })
    const [userID, setUserID] = useState({ user_name: "", email: "", phone: "", image: "", role_id: "", password: "", address: "", gender: "" })
    const navigate = useNavigate()

    const getUsers = reverseUsers.filter(allusers => allusers.role_id === "63b5786af12ca3d559688b2b")

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
                    setModal(false)
                    toast.success("user successfully created")
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
    myForm.append("verified_at", "verified")


    function findUser(id) {
        fetch(`${url}/users/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setUserID(data)
            })
    }

    function updateUser() {
        if (user.user_name === "" || user.address === "" || user.email === "" || user.phone === "" || user.image === "" || user.branch_id === "" || user.password === "" || user.salary === "" || user.gender === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/users`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "user_name": user.user_name,
                    "address": user.address,
                    "email": user.email,
                    "phone": user.phone,
                    "password": user.password,
                    "gender": user.gender,
                    "emp_date": dateToday(),
                    "role_id": "63b5786af12ca3d559688b2b",
                    "id": userID._id,
                    "image": user.image,
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <div>
                <div className="dashboard_top">
                    <SideBar />
                    <div className="dash_body">
                        <Admin_nav />
                        <section>
                            <div className="users_bg">
                                <div className="users_header">
                                    <div className="users_bg_overlay">
                                        <div>Total Number of Users <span className="total_users">{getUsers.length}</span> </div>
                                    </div>
                                    <div className="create_btn_bg">
                                        <div onClick={() => setModal(true)} className="create_btn">Create User</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {
                            modal && <div className="admin_modal">
                                <div className={!darkbg ? "admin_mode" : "admin_mode admin_mode_dark"}>
                                    <div onClick={() => setModal(false)} className="modal_close"><IoCloseSharp /></div>
                                    <div className="my_modal_details">
                                        {
                                            !updateModal && <h4>Create User</h4>
                                        }
                                        {
                                            updateModal && <h4>Update User</h4>
                                        }
                                        <div className="my_modal_links">
                                        </div>
                                        <div className="pt-3">

                                            <form className="form_input">
                                                <div>Name</div>
                                                <input type="text" name="user_name" className={err && user.user_name === "" ? "err" : null} placeholder={updateModal ? userID.user_name : null} value={user.user_name} onChange={(e) => setUser({ ...user, user_name: e.target.value })} />

                                                <div>Email</div>
                                                <input type="email" name="email" className={err && user.email === "" ? "err" : null} placeholder={updateModal ? userID.email : null} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                                                <div>
                                                    <div>
                                                        <div>phone Number</div>
                                                        <input type="number" name="phone" className={err && user.phone === "" ? "err" : null} placeholder={updateModal ? userID.phone : null} value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                    </div>
                                                    <div>
                                                        <div>Password</div>
                                                        <input type="password" minLength="6" name="password" className={err && user.password === "" ? "err" : null} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div>Addess</div>
                                                <input type="text" name="address" className={err && user.address === "" ? "err" : null} placeholder={updateModal ? userID.address : null} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />



                                                <div>
                                                    <div>
                                                        <div>Gender</div>
                                                        <select name="gender" className={err && user.gender === "" ? "err" : null} value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })}>
                                                            {
                                                                !updateModal && <option>Select gender</option>
                                                            }
                                                            {
                                                                updateModal && <option>{userID.gender}</option>
                                                            }
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="others">Prefer not to say</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div>Profile photo</div>
                                                        <input type="file" name="image" className={err && user.image === "" ? "err" : "image_color"} onChange={(e) => setUser({ ...user, image: e.target.files[0] })} />
                                                    </div>
                                                </div>

                                            </form>

                                            <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                {
                                                    !updateModal && <button onClick={() => createUser()}>Create User</button>
                                                }
                                                {
                                                    updateModal && <button onClick={() => updateUser()}>Update User</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        <section className="users_body">
                            <div className={darkbg ? "darkMode" : "items_bg"}>
                                <div className="items_header_bg">
                                    <div className="items_header">
                                        <div>MANAGE USERS</div>
                                        <div className="items_grid_icons">
                                            {
                                                !grid && <div onClick={() => setGrid(true)} className="item_grid1"><IoGrid />
                                                    <p className="item_grid1_txt">Uniform view</p>
                                                </div>

                                            }
                                            {
                                                grid && <div onClick={() => setGrid(false)} className="item_grid2"><BsFillGrid1X2Fill />
                                                    <p className="item_grid2_txt">Un-uniform view</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_pro_items">
                                    <div className={!grid ? "items" : "items_grid admin_items_grid"}>

                                        {
                                            getUsers.length ? (
                                                getUsers.map((data) => {
                                                    return (
                                                        <div className="item">
                                                            <div className="item_image">
                                                                <div onClick={() => navigate(`/profile/${data._id}`)}><img src={`${url}/uploads/${data.image}`} alt="item" /></div>
                                                                <div className="events_btn events_no_background">
                                                                    <div onClick={() => deleteStaff(data._id)} className="text-danger"><IoTrashSharp /></div>
                                                                    <div onClick={() => { setModal(true); setUpdateModal(true); findUser(data._id) }} className="text-light" ><IoCreate /></div>
                                                                </div>
                                                            </div>
                                                            <div className={!grid ? "item_details" : "items_grid_details"} style={{ textAlign: "center" }}>
                                                                <div className="item_title">{data.user_name}</div>
                                                                <b>{data.phone}</b>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            ) : <img src={spinner} alt="spinner" id="spinner" />
                                        }

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers