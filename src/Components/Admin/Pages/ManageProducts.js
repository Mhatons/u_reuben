import { useContext } from "react"
import { IoGrid, IoTrashSharp, IoCreate, IoCloseSharp } from "react-icons/io5"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { Link } from "react-router-dom"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { myContext } from "../../../myContext"
import { useState } from "react"

function ManageProducts() {

    const { grid, setGrid, darkbg, modal, setModal, updateModal, setUpdateModal,
        spinner, reverseProduct, success, url, err, setErr, reverseCategories, deleteProduct, dateToday, userInfo 
    } = useContext(myContext)

    const [product, setProduct] = useState({ title: "", product_category_id: "", image: "", description: "", date: "", user_id: "", price: "" })
    const [productID, setProductID] = useState({ title: "", product_category_id: "", image: "", description: "", date: "", user_id: "", price: "" })

    


    const createProduct = () => {
        if (product.title === "" || product.product_category_id === "" || product.image === "" || product.description === "" || product.price === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/products`, {
                method: "POST",
                // headers: { "Content-Type": "application/json" },
                body: myForm
            })
                .then(resp => resp.json())
                .then((data) => {
                    success("successful!")
                })
        }
    }

    const myForm = new FormData()
    myForm.append("title", product.title)
    myForm.append("product_category_id", product.product_category_id)
    myForm.append("description", product.description)
    myForm.append("price", product.price)
    myForm.append("date", dateToday())
    myForm.append("user_id", userInfo._id)
    myForm.append("image", product.image)


    function findProduct(id) {
        fetch(`${url}/products/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProductID(data)
                console.log(data)
            })
    }

    function updateProduct() {
        if (product.title === "" || product.product_category_id === "" || product.image === "" || product.description === "" || product.date === "" || product.user_id === "" || product.price === "") {
            setErr(true)
        }
        else {
            fetch(`${url}/products`, {
                method: "PUT",
                // headers: { "Content-Type": "application/json" },
                body: 
                JSON.stringify({
                    myForm,
                    "id": productID._id
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
                                        <div>Total Number of Products <span className="total_users">{reverseProduct.length}</span> </div>
                                    </div>
                                    <div className="create_btn_bg">
                                        <div onClick={() => setModal(true)} className="create_btn">Create Product</div>
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
                                            !updateModal && <h4>Create Product</h4>
                                        }
                                        {
                                            updateModal && <h4>Update Product</h4>
                                        }
                                        <div className="my_modal_links">
                                        </div>
                                        <div className="pt-3">

                                            <form className="form_input">
                                                <div>
                                                    <div>Product Title</div>
                                                    <input type="text" name="title" placeholder={updateModal ? productID.title : null} className={err && product.title === "" ? "err" : null} value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />
                                                </div>
                                                <div>
                                                    <div>Product Price</div>
                                                    <input type="number" name="price" placeholder={updateModal ? productID.price : null} className={err && product.price === "" ? "err" : null} value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                                                </div>
                                                <div>
                                                    <div>Product Description</div>
                                                    <input type="text" name="description" placeholder={updateModal ? productID.description : null} className={err && product.description === "" ? "err" : null} value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                                                </div>

                                                <div>
                                                    <div>product Category</div>
                                                    <select name="product_category_id" placeholder={updateModal ? productID.product_category_id : null} className={err && product.product_category_id === "" ? "err" : null} value={product.product_category_id} onChange={(e) => setProduct({ ...product, product_category_id: e.target.value })}>
                                                        {
                                                            !updateModal && <option>Select Category</option>
                                                        }
                                                        {
                                                            // updateModal && <option>{userID.branch_name}</option>
                                                        }
                                                        {
                                                            reverseCategories.map((data) => {
                                                                return (
                                                                    <option key={data.id} value={data._id}>{data.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>Product Image</div>
                                                    <input type="file" name="image" className={err && product.image === "" ? "err" : null} onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />
                                                </div>
                                            </form>

                                            <div className="form_btn" style={{ paddingBottom: "2em" }}>

                                                {
                                                    !updateModal && <button onClick={() => createProduct()}>Create Product</button>
                                                }
                                                {
                                                    updateModal && <button onClick={() => updateProduct()}>Update Product</button>
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
                                        <div>MANAGE PRODUCTS</div>
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
                                    <div className={!grid ? "items" : "items_grid"}>

                                        {
                                            reverseProduct.length ? (
                                                reverseProduct.map((data) => {
                                                    return (
                                                        <div key={data.id} className="item">
                                                            <div className="item_image">
                                                                <img src={`${url}/uploads/${data.image}`} alt="item" />
                                                                <div className="events_btn events_no_background">
                                                                    <Link onClick={() => deleteProduct(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                    <Link onClick={() => { setModal(true); setUpdateModal(true); findProduct(data._id) }} className="text-light" ><IoCreate /></Link>
                                                                </div>
                                                            </div>
                                                            <div className={!grid ? "item_details" : "items_grid_details"}>
                                                                <div className="item_title">{data.title}</div>
                                                                <b>N{data.price}</b>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            ) :  <img src={spinner} alt="spinner" className="spinner" />
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

export default ManageProducts