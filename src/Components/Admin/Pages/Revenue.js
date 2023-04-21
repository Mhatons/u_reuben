import { useContext, useState } from "react"
import { myContext } from "../../../myContext"
import { IoArrowBackCircle } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
function Revenue() {
    const { darkbg, setModal, url, sale, setSale, totalSale, setBranchExpenese, branchExpenese, totalBranchExpenses } = useContext(myContext)
    const [income, setIncome] = useState(true)
    const navigate = useNavigate()
    const [branch, setBranch] = useState([])

    const reverseSale = [...sale].reverse()
    const reverseExpense = [...branchExpenese].reverse()


    const { id } = useParams()

    fetch(`${url}/branches/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setBranch(data)
        })

    fetch(`${url}/expenses/branch/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setBranchExpenese(data)
        })

    fetch(`${url}/sales/branch/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setSale(data)
        })


    return (
        <div>
            <div>
                <section className="">
                    <div>
                        <div className="record_nav2">
                            <div onClick={() => navigate(-1)} className="record_back">
                                <span><IoArrowBackCircle /></span>
                            </div>
                            <div>{branch.name}</div>
                        </div>
                        <div className="Record_header">
                            <div className="Record_header_items">
                                <div className="Record_daily Record">
                                    <button>Daily Statistics</button>
                                </div>
                                <div className="Record">
                                    <button>Weekly Statistics</button>
                                </div>
                                <div className="Record">
                                    <button>Monthly Statistics</button>
                                </div>
                                <div className="Record Record_month">
                                    <button>Three Months Statistics</button>
                                </div>
                            </div>
                        </div>
                        <section className="record_bg">
                            <div className="records">
                                <div className="record_slide">
                                    <div className="record_body">
                                        <div className="record_bg_overlay">
                                            <div> Total Income<span className="total_users">N{totalSale}</span> </div>
                                        </div>
                                        <div className="record_btn_bg">
                                            <div onClick={() => setIncome(true)} className="create_btn">View Statistics</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="record_slide">
                                    <div className="record_body">
                                        <div className="record_bg_overlay">
                                            <div>Total Expenses <span className="total_users">N{totalBranchExpenses}</span> </div>
                                        </div>
                                        <div className="record_btn_bg">
                                            <div onClick={() => setIncome(false)} className="create_btn">View Statistics</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="record_nav2">
                                <div>Activities Breakdown</div>
                            </div>
                        </section>
                        {
                            income && <div className="record_items_bg">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Products</th>
                                            <th scope="col">Quantity Sold</th>
                                            <th scope="col">Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reverseSale.length ? (
                                                reverseSale.map((data, i) => {
                                                    return (
                                                        <tr className="table_item">
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{data.date}</td>
                                                            <td className="w-50">{data.product_details}</td>
                                                            <td>{data.quantity}</td>
                                                            <td>NGN {data.amount}</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        {
                            !income && <div className="record_items_bg">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Purpose</th>
                                            <th scope="col">Authorising staff</th>
                                            <th scope="col">Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reverseExpense.length ? (
                                                reverseExpense.map((data, i) => {
                                                    return (
                                                        <tr className="table_item">
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{data.date}</td>
                                                            <td>{data.purpose}</td>
                                                            <td>{data.user_name}</td>
                                                            <td>N{data.amount}</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Revenue