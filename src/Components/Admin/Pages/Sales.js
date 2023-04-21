import { useContext, useEffect, useState } from "react"
import { IoTrashSharp, IoCreate, IoCloseSharp, IoRefreshCircle, IoSyncCircle, IoCheckmarkCircle, IoEllipseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { myContext } from "../../../myContext"

import Admin_nav from "../Files/Admin_nav"
import SideBar from "../Files/SideBar"
import { toast } from "react-toastify"


function Sales() {
    const { darkbg, modal, setModal, updateModal, setUpdateModal, err, setErr, url, reverseSales, reverseBranch, reverseProduct, salesTotal, reverseCategories, dateToday, userInfo } = useContext(myContext)
    const [sale, setSale] = useState({ payment_id: "", product_id: "", delivery_id: "", quantity: "", category_id: "" })

    const [getSales, setGetSales] = useState([])
    const [getId, setGetId] = useState("")
    const [saleData, setSaleData] = useState({ title: "", quantity: 1 })
    const [title, setTitle] = useState("")



    let filterProduct = reverseProduct.filter(category => category.product_category_id == sale.category_id)

    function status() {
        let status;
        if (sale.delivery_id === "office") {
            status = "delivered"
        }
        else {
            status = "pending"
        }
        return status
    }

    function getProductId(id) {
        showItems();
        fetch(`${url}/products/${id}`)
            .then(resp => resp.json())
            .then((data) => {
                setGetId(data.price)
                setTitle(data.title)
            })

    }


    function clearStorage() {
        localStorage.removeItem('data')
    }


    function salesToStorage() {

        if (saleData.title === "" || saleData.quantity === "" || getId === "") {
            setErr(true)
        }
        else {
            let myArr;
            const myData = localStorage.getItem('data')

            if (myData === null) {
                myArr = [];
            } else {
                myArr = JSON.parse(myData)
            }
            myArr.push({ title: title, price: getId * parseInt(saleData.quantity), quantity: saleData.quantity })
            localStorage.setItem('data', JSON.stringify(myArr))
            setSaleData({ title: " ", quantity: 1 })
            setSale({ category_id: " " })
        }
    }

    useEffect(() => {
        let mydata = JSON.parse(localStorage.getItem("data"))
        setGetSales(mydata)
    }, [reverseProduct])


    function getTotal() {
        let sum = 0
        getSales.map((data) => {
            sum += parseInt(data.price)
        })
        return sum
    }

    function getLocalSales() {
        let items;
        if (getSales) {
            getSales.map((data) => {
                items += ` ( ${data.title}, ${data.quantity}, N${data.price} ) --- `
            })
        }
        return items

        // if (getSales) {
        //     getSales.map((data) => {
        //         console.log(data)
        //         items = data
        //     });
        // }
        // return items

    }

    // const productsArray = getSales.map(obj => obj.product_details);
    // console.log(productsArray)



    const createSale = () => {
        // if (sale.payment_id === "" || sale.product_id === "" || sale.delivery_id === "" || sale.quantity === "") {
        //     setErr(true)
        // }
        // else {
        fetch(`${url}/sales`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "payment_method": sale.payment_id,
                "status": status(),
                "user_id": "Office",
                "product_details": getLocalSales(),
                "branch_id": userInfo.branch_id,
                "delivery_method": sale.delivery_id,
                "date": dateToday(),
                "quantity": sale.quantity,
                "amount": getTotal(),
                "delivery_fee": 700
            })
        }).then(resp => resp.json())
            .then((data) => {
                toast.success("Order successfully created")
                clearStorage()
                document.getElementById("create_sale_btn").style.display = "none"
            })
        // }
    }

    function deleteSales(id) {
        fetch(`${url}/sales/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    function showProduct() {
        document.getElementById("sale_product").style.display = "block"
    }
    function showItems() {
        document.getElementById("sale_quantity").style.display = "block"
        document.getElementById("add_sale_btn").style.display = "block"
    }
    function showBtn() {
        document.getElementById("create_sale_btn").style.display = "block"

    }
    function showOtherItems() {
        document.getElementById("delivery_payment").style.display = "flex"
        document.getElementById("add_sale_btn").style.display = "block"
    }

    function removeItem(id) {
        console.log(id)

        let index = getSales.indexOf(id);
        getSales.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(getSales));

        // let rm_data = JSON.parse(localStorage.getItem("data"))
        // const fn_data = rm_data.findIndex(data => data.id === id)
        // console.log(fn_data)
        // console.log(id)

        // if (fn_data !== id) {
        //     rm_data.splice(fn_data, 1)
        //     console.log(rm_data)
        // }

        // localStorage.setItem('data', JSON.stringify(rm_data))
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
                                            <div>All Time Sales Total <span className="total_users">N{salesTotal}</span> </div>
                                        </div>
                                        <div className="create_btn_bg">
                                            <div onClick={() => setModal(true)} className="create_btn">Create Sales</div>
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
                                                !updateModal && <h4>Create Sale</h4>
                                            }
                                            {
                                                updateModal && <h4>Update Sale</h4>
                                            }
                                            <div className="my_modal_links">
                                            </div>
                                            <div className="pt-3">

                                                <div className="form_input">
                                                    <div>
                                                        {/* <div>product category</div> */}
                                                        <select className={err && sale.category_id === "" ? "err" : null} value={sale.category_id} onChange={(e) => { setSale({ ...sale, category_id: e.target.value }); showProduct() }}>
                                                            <option className="select_null">Select category</option>
                                                            {
                                                                reverseCategories.map((data, i) => {
                                                                    return (
                                                                        <option className="option_bg" key={i} value={data._id}>{data.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        <div></div>
                                                    </div>

                                                    <div className="d_flex">
                                                        <div className="w-50" id="sale_product" >
                                                            {/* <div>Product</div> */}
                                                            <select className={err && saleData.title === "" ? "err" : null} value={saleData.title} onChange={(e) => { setSaleData({ ...saleData, title: e.target.value }); getProductId(e.target.value) }}>
                                                                <option className="select_null">Select Product</option>
                                                                {
                                                                    filterProduct.map((data, i) => {
                                                                        return (
                                                                            <option className="option_bg" key={i} value={data._id}> {data.title} </option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                            <div></div>
                                                        </div>

                                                        <div className="w-50 ms-3" id="sale_quantity" >
                                                            {/* <div>Quantity</div> */}
                                                            <input type="number" min='1' className={err && saleData.quantity === "" ? "err" : null} value={saleData.quantity} onChange={(e) => { setSaleData({ ...saleData, quantity: e.target.value }); showOtherItems() }} />
                                                            {/* <input type="number" min='1' className={err && sale.quantity === "" ? "err" : null} value={sale.quantity} onChange={(e) => { setSale({ ...sale, quantity: e.target.value }); showOtherItems() }} /> */}
                                                        </div>
                                                    </div>

                                                    <div id="add_sale_btn" >
                                                        <button onClick={() => salesToStorage()}>Add Item</button>
                                                    </div>
                                                    {
                                                        getSales ? (
                                                            <div id="clear_list_btn" >
                                                                <button onClick={() => clearStorage()}>Clear List</button>
                                                            </div>
                                                        ) : null
                                                    }


                                                    {
                                                        getSales ? (
                                                            <div className="selected_products">
                                                                {
                                                                    getSales.map((data, i) => {
                                                                        return (
                                                                            <div className="selected_product" key={i}>

                                                                                <div>
                                                                                    <span>{i + 1}.</span><span className="selected_products_title">{data.title}</span>
                                                                                    <span className="product_quantity">{data.quantity}</span>
                                                                                </div>
                                                                                <div className="selected_opp">
                                                                                    <div>N{data.price}</div>
                                                                                    <span onClick={() => removeItem(i)}> <IoTrashSharp /> </span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                                <div className="selected_product">
                                                                    <span className="selected_total">Total</span>
                                                                    <div className="selected_total">N {getSales ? getTotal() : null}</div>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }

                                                    {
                                                        getSales ? (
                                                            <div className="d_flex" id="">
                                                                <div className="w-50" >
                                                                    <div>Delivery Method</div>
                                                                    <select className={err && sale.delivery_id === "" ? "err" : null} value={sale.delivery_id} onChange={(e) => setSale({ ...sale, delivery_id: e.target.value })}>
                                                                        <option>Select method</option>
                                                                        <option className="option_bg" value="office">Not Applicable</option>
                                                                        <option className="option_bg" value="home">Home Delivery</option>
                                                                    </select>
                                                                </div>

                                                                <div className="w-50 ms-3" >
                                                                    <div>Payment</div>
                                                                    <select className={err && sale.payment_id === "" ? "err" : null} value={sale.payment_id} onChange={(e) => { setSale({ ...sale, payment_id: e.target.value }); showBtn() }}>
                                                                        <option>select payment method</option>
                                                                        <option className="option_bg" value="POS">POS</option>
                                                                        <option className="option_bg" value="Transfer">Transfer</option>
                                                                        <option className="option_bg" value="Cash">Cash</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }

                                                </div>

                                                <div className="form_btn" id="create_sale_btn" style={{ paddingBottom: "2em" }}>

                                                    {
                                                        !updateModal && <button onClick={() => createSale()}>Create Sale</button>
                                                    }
                                                    {
                                                        // updateModal && <button onClick={() => updateBranch()}>Update Branch</button>
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
                                            <div>SALES MANAGEMENT</div>
                                        </div>
                                    </div>
                                    <div className="admin_pro_items">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Payment</th>
                                                    <th scope="col">Delivery</th>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Branch</th>
                                                    <th scope="col">DelFee</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reverseSales.length ? (
                                                        reverseSales.map((data, i) => {
                                                            return (
                                                                <tr className="table_item" key={i}>
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td className="sale_table_nowrap">{data.date}</td>
                                                                    <td className="sale_table_nowrap">{data.user_name}</td>
                                                                    <td>{data.payment_method}</td>
                                                                    <td>{data.delivery_method}</td>
                                                                    <td>{data.product_details}</td>
                                                                    <td className="sale_table_nowrap">{data.name}</td>
                                                                    <td>N{data.delivery_fee}</td>
                                                                    <td>N{data.amount}</td>
                                                                    <td><div className={data.status === "pending" ? "sale_status" : data.status === "delivered" ? "sale_status sale_delivered" : "sale_status sale_returned"}>
                                                                        <IoEllipseSharp />
                                                                    </div></td>
                                                                    <td>
                                                                        <div className="actions_btn">
                                                                            <Link onClick={() => deleteSales(data._id)} className="text-danger"><IoTrashSharp /></Link>
                                                                            <Link onClick={() => { setModal(true); setUpdateModal(true) }} className="text-secondary" ><IoCreate /></Link>
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

export default Sales