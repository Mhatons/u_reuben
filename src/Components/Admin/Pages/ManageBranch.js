import { useState } from "react"
import { useContext } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { myContext } from "../../../myContext"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { toast } from "react-toastify"
function ManageBranch() {

    const { darkbg, modal, setModal, updateModal, setUpdateModal, err, setErr, url, reverseBranch, dateToday, spinner } = useContext(myContext)

    const [branch, setBranch] = useState({ name: "", address: "" })
    const [findbranchID, setFindBranchID] = useState({ name: "", address: "" })


    const createBranch = () => {
        if (branch.name === "" || branch.address === "" || branch.date === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/branches`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "name": branch.name,
                    "address": branch.address,
                    "date": dateToday()
                })
            }).then(resp => resp.json())
                .then((data) => {
                    setBranch("")
                    setModal(false)
                    toast.success("Branch created successfully")
                })
        }
    }


    function findBranch(id) {
        fetch(`${url}/branches/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setFindBranchID(data)
                console.log(data)
            })
    }

    function updateBranch() {
        if (branch.name === "" || branch.address === "" || branch.date === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/branches`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "name": branch.name,
                    "address": branch.address,
                    "date": branch.date,
                    "id": findbranchID._id
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    toast.success("branch updated successfully")
                    setModal(false)
                })
        }
    }

    function deleteBranch(id) {
        fetch(`${url}/branches/${id}`, {
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
                                            <div>Total Number of Branches <span className="total_users">{reverseBranch.length}</span> </div>
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Branch</div>

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
                                                !updateModal && <h4>Create Branch</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Branch</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">

                                                <div className="form_input">
                                                    <div>Branch name</div>
                                                    <input type="text" className={err && branch.name === "" ? "err" : null} placeholder={updateModal ? findbranchID.name : null} value={branch.name} onChange={(e) => setBranch({ ...branch, name: e.target.value })} />
                                                    <div>Branch Addess</div>
                                                    <input type="text" className={err && branch.address === "" ? "err" : null} placeholder={updateModal ? findbranchID.address : null} value={branch.address} onChange={(e) => setBranch({ ...branch, address: e.target.value })} />
                                                    {/* <div>Date created</div>
                                                    <input type="date" className={err && branch.date === "" ? "err" : null} placeholder={updateModal ? findbranchID.date : null} value={branch.date} onChange={(e) => setBranch({ ...branch, date: e.target.value })} /> */}
                                                </div>

                                                <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => createBranch()}>Create Branch</button>
                                                    }
                                                    {
                                                        updateModal && <button onClick={() => updateBranch()}>Update Branch</button>
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
                                            <div>BRANCH MANAGEMENT</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Date of Establisment</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Number of Staff</th>
                                                    <th scope="col">Branch Manager</th>
                                                    <th scope="col">Revenue</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reverseBranch.length ? (
                                                        reverseBranch.map((data, i) => {
                                                            return (
                                                                <tr className="table_item">
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{data.date}</td>
                                                                    <td>{data.name}</td>
                                                                    <td>{data.address}</td>
                                                                    <td>16</td>
                                                                    <td>Amaka John</td>
                                                                    <td><Link to={`/admin/branch/${data._id}`} className="revenue_link" >Records</Link></td>
                                                                    <td>
                                                                        <div className="actions_btn">
                                                                            <Link onClick={() => deleteBranch(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                            <Link onClick={() => { setModal(true); setUpdateModal(true); findBranch(data._id) }} className="text-secondary" ><IoCreate /></Link>
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
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBranch