import { useContext, useState } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp, IoGrid } from "react-icons/io5"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { myContext } from "../../../myContext"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"

import { formatDistance, subDays } from 'date-fns'

// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

function ManageStaff() {

    const { darkbg, modal, setModal, updateModal, setUpdateModal, deleteStaff, reverseUsers, url, spinner, err, setErr, reverseBranch, reverseRoles, dateToday, grid, setGrid } = useContext(myContext)

    const [user, setUser] = useState({ user_name: "", email: "", phone: "", image: "", branch_id: "", role_id: "", password: "", salary: "", address: "", gender: "", emp_date: "" })
    const [userID, setUserID] = useState({ user_name: "", email: "", phone: "", image: "", branch_id: "", role_id: "", password: "", salary: "", address: "", gender: "", emp_date: "" })



    const getStaff = reverseUsers.filter(users => users.role_id !== "63b5786af12ca3d559688b2b")
    const [message, setMessage] = useState("")

    const myForm = new FormData()
    myForm.append("user_name", user.user_name)
    myForm.append("address", user.address)
    myForm.append("email", user.email)
    myForm.append("phone", user.phone)
    myForm.append("password", user.password)
    myForm.append("gender", user.gender)
    myForm.append("emp_date", dateToday())
    myForm.append("branch_id", user.branch_id)
    myForm.append("role_id", user.role_id)
    myForm.append("image", user.image)
    myForm.append("salary", user.salary)
    myForm.append("verified_at", "verified")

    const createUser = () => {
        if (user.user_name === "" || user.address === "" || user.email === "" || user.phone === "" || user.image === "" || user.branch_id === "" || user.role_id === "" || user.password === "" || user.salary === "" || user.gender === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/users`, {
                method: "POST",
                body: myForm
            }).then(resp => resp.json())
                .then((data) => {
                    setMessage(data.message)
                    console.log(data)
                })
        }
    }

    function findUser(id) {
        fetch(`${url}/users/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setUserID(data)
            })
    }

    function updateUser() {
        if (user.user_name === "" || user.address === "" || user.email === "" || user.phone === "" || user.image === "" || user.branch_id === "" || user.role_id === "" || user.password === "" || user.salary === "" || user.gender === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/users`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    myForm,
                    "id": userID._id
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
                <div>
                    <div className="dashboard_top">
                        <SideBar />
                        <div className="dash_body">
                            <Admin_nav />
                            <section>
                                <div className="users_bg">
                                    <div className="users_header">
                                        <div className="users_bg_overlay">
                                            <div>Total Number of Staff <span className="total_users">{getStaff.length}</span> </div>
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Staff</div>

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
                                                !updateModal && <h4>Create Staff</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Staff</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">

                                                <form action="http://localhost:4002/users" method="POST" encType="multipart/form-data" className="form_input">
                                                    <div>Name</div>
                                                    <input type="text" name="user_name" className={err && user.user_name === "" ? "err" : null} placeholder={updateModal ? userID.user_name : null} value={user.user_name} onChange={(e) => setUser({ ...user, user_name: e.target.value })} />

                                                    <div>Email</div>
                                                    <input type="text" name="email" className={err && user.email === "" ? "err" : null} placeholder={updateModal ? userID.email : null} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                                                    <div>
                                                        <div>phone Number</div>
                                                        <input type="number" name="phone" className={err && user.phone === "" ? "err" : null} placeholder={updateModal ? userID.phone : null} value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                    </div>
                                                    <div>
                                                        <div>Password</div>
                                                        <input type="password" name="password" className={err && user.password === "" ? "err" : null} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                                    </div>

                                                    <div>Addess</div>
                                                    <input type="text" name="address" className={err && user.address === "" ? "err" : null} placeholder={updateModal ? userID.address : null} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />


                                                    <div>
                                                        <div>Branch</div>
                                                        <select name="branch_id" className={err && user.branch_id === "" ? "err" : null} value={user.branch_id} onChange={(e) => setUser({ ...user, branch_id: e.target.value })}>
                                                            {
                                                                !updateModal && <option>Select branch</option>
                                                            }
                                                            {
                                                                updateModal && <option>{userID.branch_name}</option>
                                                            }
                                                            {
                                                                reverseBranch.map((data) => {
                                                                    return (
                                                                        <option value={data._id}>{data.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <div>Salary</div>
                                                        <input type="text" name="salary" className={err && user.salary === "" ? "err" : null} placeholder={updateModal ? userID.salary : null} value={user.salary} onChange={(e) => setUser({ ...user, salary: e.target.value })} />
                                                    </div>


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



                                                    <div>
                                                        <div>Role</div>
                                                        <select name="role_id" className={err && user.role_id === "" ? "err" : null} value={user.role_id} onChange={(e) => setUser({ ...user, role_id: e.target.value })}>
                                                            {
                                                                !updateModal && <option value="63b5786af12ca3d559688b2b">User</option>
                                                            }
                                                            {
                                                                updateModal && <option>{userID.role}</option>
                                                            }
                                                            {
                                                                reverseRoles.map((data) => {
                                                                    return (
                                                                        <option value={data._id}>{data.role}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <div>Profile photo</div>
                                                        <input type="file" name="image" accept="image/*,video/*" className={err && user.image === "" ? "err" : "image_color"} onChange={(e) => setUser({ ...user, image: e.target.files[0] })} />
                                                    </div>

                                                </form>
                                                <div className={message === "login successful" ? "msg msg_suc" : "msg"}>{message}</div>

                                                <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => createUser()}>Create Staff</button>
                                                    }
                                                    {
                                                        updateModal && <button onClick={() => updateUser()}>Update Staff</button>
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
                                                getStaff.length ? (
                                                    getStaff.map((data) => {
                                                        return (
                                                            <div className="item">
                                                                <div className="item_image">
                                                                    <img src={`${url}/uploads/${data.image}`} alt="item" />
                                                                    <div className="events_btn events_no_background">
                                                                        <Link onClick={() => deleteStaff(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                        <Link onClick={() => { setModal(true); setUpdateModal(true); findUser(data._id) }} className="text-light" ><IoCreate /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className={!grid ? "item_details" : "items_grid_details"} style={{ textAlign: "center" }}>
                                                                    <div className="item_title staff_attr"> Name: {data.user_name}</div>
                                                                    <div className="item_title staff_attr"> Role: {data.role} </div>
                                                                    <div className="item_title staff_attr"> Email {data.email} </div>
                                                                    <div className="item_title staff_attr"> Mobile: {data.phone}</div>
                                                                    <div className="item_title staff_attr"> Salary: N{data.salary} </div>
                                                                    <div className="item_title staff_attr"> Branch: {data.name} </div>
                                                                    <div className="item_title staff_attr"> Address: {data.address} </div>
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

                            {/* <section className="users_body">
                                <div className={darkbg ? "darkMode" : "items_bg"}>
                                    <div className="items_header_bg">
                                        <div className="items_header">
                                            <div>STAFF MANAGEMENT</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Date of Emp</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Salary</th>
                                                    <th scope="col">Branch</th>
                                                    <th scope="col">Photo</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getStaff.length ? (
                                                        getStaff.map((data, i) => {
                                                            return (
                                                                <tr className="table_item" key={i}>
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{data.emp_date}</td>
                                                                    <td>{data.user_name}</td>
                                                                    <td>{data.email}</td>
                                                                    <td>{data.gender}</td>
                                                                    <td>{data.role}</td>
                                                                    <td>{data.salary}</td>
                                                                    <td>{data.name}</td>
                                                                    <td> <img src={`${url}/uploads/${data.image}`} alt="photo" /> </td>
                                                                    <td>
                                                                        <div className="actions_btn">
                                                                            <Link onClick={() => deleteStaff(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                            <Link onClick={() => { setModal(true); setUpdateModal(true); findUser(data._id) }} className="text-light" ><IoCreate /></Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    ) : <img src={spinner} alt="loading..." className="spinner" />
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageStaff