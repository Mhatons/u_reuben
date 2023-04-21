import { useContext } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { myContext } from "../../../myContext"
import { useState } from "react"

function Categories() {

    const { grid, setGrid, darkbg, modal, setModal, updateModal, setUpdateModal, err, setErr, url, reverseCategories } = useContext(myContext)

    const [category, setCategory] = useState("")
    const [findCategory, setFindCategory] = useState("")



    const createCategory = () => {
        if (category === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/product_category`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "name": category
                })
            }).then((resp) => resp.json)
                .then((data) => {
                    setCategory("")
                    console.log(data)
                })
        }
    }

    function getCategoryID(id) {
        fetch(`${url}/product_category/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setFindCategory(data)
                console.log(data)
            })
    }

    function updateCategory() {
        if (category === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/product_category`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "name": category,
                    "id": findCategory._id
                })
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setCategory("")
                })
        }
    }

    function deleteCategory(id) {
        fetch(`${url}/product_category/${id}`, {
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
                                            <div>Total Number of Product Categories <span className="total_users">{reverseCategories.length}</span> </div>
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Category</div>
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
                                                !updateModal && <h4>Create Category</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Category</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">

                                                <div className="form_input">
                                                    <div>Product category name</div>
                                                    <input type="text" className={err && category === "" ? "err" : null} placeholder={updateModal ? findCategory.name : null} value={category} onChange={(e) => setCategory(e.target.value)} />
                                                </div>

                                                <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => createCategory()}>Create category</button>
                                                    }
                                                    {
                                                        updateModal && <button onClick={() => updateCategory()}>Update category</button>
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
                                            <div>MANAGE PRODUCT CATEGORIES</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Category name</th>
                                                    <th scope="col">Total Items</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reverseCategories.length ? (
                                                        reverseCategories.map((data, i) => {
                                                            return (
                                                                <tr className="table_item">
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{data.name}</td>
                                                                    <td>13</td>
                                                                    <td>
                                                                        <div className="actions_btn">
                                                                            <Link onClick={() => deleteCategory(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                            <Link onClick={() => { setModal(true); setUpdateModal(true); getCategoryID(data._id) }} className="text-secondary" ><IoCreate /></Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    ) : null
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

export default Categories