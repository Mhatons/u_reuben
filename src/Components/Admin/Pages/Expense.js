import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { myContext } from "../../../myContext"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"

function Expense() {

    const { darkbg, modal, setModal, updateModal, setUpdateModal, reverseExpenses, url, setErr, err, reverseBranch, deleteExpense, userInfo, num, dateToday, spinner } = useContext(myContext)

    const [expenses, setExpenses] = useState({ amount: "", purpose: "", user_id: "", branch_id: "" })
    const [findExpenseID, setFindExpenseID] = useState({ amount: "", purpose: "", branch_id: "" })

    const addExpense = () => {
        if (expenses.date === "" || expenses.amount === "" || expenses.purpose === "" || expenses.branch_id === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/expenses`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "date": dateToday(),
                    "purpose": expenses.purpose,
                    "amount": expenses.amount,
                    "user_id": userInfo._id,
                    "branch_id": expenses.branch_id
                })
            }).then((resp) => resp.json)
                .then((data) => {
                    setModal(false)
                })
        }
    }

    function findExpense(id) {
        fetch(`${url}/expenses/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setFindExpenseID(data)
            })
    }

    function updateExpense() {
        if (expenses.date === "" || expenses.amount === "" || expenses.purpose === "" || expenses.branch_id === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/expenses`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "date": expenses.date,
                    "purpose": expenses.purpose,
                    "amount": expenses.amount,
                    "user_id": userInfo._id,
                    "branch_id": expenses.branch_id,
                    "id": findExpenseID._id
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setExpenses("")
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
                                            <div>Total Expenses <span className="total_users">N{num}</span> </div>
                                            {/* <div>Total Number of Expenses <span className="total_users">{reverseExpenses.length}</span> </div> */}
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Expense</div>

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
                                                !updateModal && <h4>Create Expense</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Expense</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">
                                                <div className="form_input">
                                                    {/* <div>Date</div>
                                                    <input type="date" className={err && expenses.date === "" ? "err" : null} placeholder={updateModal ? findExpenseID.date : null} value={expenses.date} onChange={(e) => setExpenses({ ...expenses, date: e.target.value })} /> */}
                                                    <div>Amount</div>
                                                    <input type="number" className={err && expenses.amount === "" ? "err" : null} placeholder={updateModal ? findExpenseID.amount : null} value={expenses.amount} onChange={(e) => setExpenses({ ...expenses, amount: e.target.value })} />
                                                    <div>Purpose</div>
                                                    <input type="text" className={err && expenses.purpose === "" ? "err" : null} placeholder={updateModal ? findExpenseID.purpose : null} value={expenses.purpose} onChange={(e) => setExpenses({ ...expenses, purpose: e.target.value })} />
                                                    <div>Branch</div>
                                                    <select className={err && expenses.branch_id === "" ? "err" : null} value={expenses.branch_id} onChange={(e) => setExpenses({ ...expenses, branch_id: e.target.value })}>
                                                        <option>Select branch</option>
                                                        {
                                                            reverseBranch.map((data) => {
                                                                return (
                                                                    <option value={data._id}>{data.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    {/* <input type="text" value={expenses.branch_id} onChange={(e) => setExpenses({ ...expenses, branch_id: e.target.value })} /> */}
                                                    {/* <div>user_id</div>
                                                    <input type="text" className={err && expenses.user_id === "" ? "err" : null} hidden value={expenses.user_id} onChange={(e) => setExpenses({ ...expenses, user_id: e.target.value })} /> */}
                                                </div>


                                                <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => addExpense()}>Create Expense</button>
                                                    }
                                                    {
                                                        updateModal && <button onClick={() => updateExpense()}>Update Expense</button>
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
                                            <div>MANAGE EXPENSES</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Purpose</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Authourizing Staff</th>
                                                    <th scope="col">Branch</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reverseExpenses.length ? (
                                                        reverseExpenses.map((data, i) => {
                                                            return (
                                                                <tr className="table_item" key={i}>
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{data.date}</td>
                                                                    <td>{data.purpose}</td>
                                                                    <td>NGN{data.amount}</td>
                                                                    <td>{data.user_name}</td>
                                                                    <td>{data.name}</td>
                                                                    <td>
                                                                        <div className="actions_btn">
                                                                            <Link onClick={() => deleteExpense(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                            <Link onClick={() => { setModal(true); setUpdateModal(true); findExpense(data._id) }} className="text-secondary" ><IoCreate /></Link>
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

export default Expense