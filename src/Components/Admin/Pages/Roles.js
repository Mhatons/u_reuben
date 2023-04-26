import { useContext } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { myContext } from "../../../myContext"
import { useState } from "react"
import { toast } from "react-toastify"
function Roles() {

    const { darkbg, modal, setModal, updateModal, setUpdateModal, reverseRoles, err, setErr, url, spinner } = useContext(myContext)

    const [role, setRole] = useState("")
    const [fRole, setFRole] = useState("")


    const createRole = () => {
        if (role === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/roles`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "role": role
                })
            }).then((resp) => resp.json)
                .then((data) => {
                    setRole("")
                    toast.success("Role successfully created")
                    setModal(false)
                })
        }
    }


    // find Role
    function findRole(id) {
        fetch(`${url}/roles/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setFRole(data)
                console.log(data)
            })
    }

    function updateRole() {
        if (role === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/roles`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "role": role,
                    "id": fRole._id
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    toast.success("Role successfully updated")
                    setModal(false)
                    setRole("")
                })
        }
    }

    function deleteRole(id) {
        fetch(`${url}/roles/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
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
                                            <div>Total Number of Roles <span className="total_users">{reverseRoles.length}</span> </div>
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Role</div>
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
                                                !updateModal && <h4>Create Role</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Role</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">

                                                <div className="form_input">
                                                    <div>Role</div>
                                                    <input type="text" className={err && role === "" ? "err" : null} placeholder={updateModal ? fRole.role : null} value={role} onChange={(e) => setRole(e.target.value)} />
                                                </div>

                                                <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => createRole()}>Create Role</button>
                                                    }
                                                    {
                                                        updateModal && <button onClick={() => updateRole()}>Update Role</button>
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
                                            <div>MANAGE ROLES</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <div>
                                            <table class="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">N/A</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Total</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        reverseRoles.length ? (
                                                            reverseRoles.map((data, i) => {
                                                                return (
                                                                    <tr className="table_item">
                                                                        <th scope="row">{i + 1}</th>
                                                                        <td>{data.role}</td>
                                                                        <td>4</td>
                                                                        <td>
                                                                            <div className="actions_btn">
                                                                                <Link onClick={() => deleteRole(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                                <Link onClick={() => { setModal(true); setUpdateModal(true); findRole(data._id) }} className="text-secondary" ><IoCreate /></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        ) :  <img src={spinner} alt="spinner" className="spinner" />
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roles