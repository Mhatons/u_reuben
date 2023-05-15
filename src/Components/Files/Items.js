import { useContext, useState } from "react"
import { IoGrid, IoHeartSharp, IoAddCircleSharp, IoRemoveCircleSharp, IoChevronUpSharp } from "react-icons/io5"
import { TfiLayoutAccordionSeparated } from "react-icons/tfi"
import { myContext } from "../../myContext"
import { Link, useNavigate } from "react-router-dom"
function Items() {

    const { grid, setGrid, darkbg, reverseProduct, url, spinner, toTopPage, more, setMore, discount, discountRate } = useContext(myContext)
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState(false)


    window.onscroll = function () { myFunction() };
    function myFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            setShowMore(true)
        }
        else {
            setShowMore(false)
            setMore(false)
        }
    }

    return (
        <div className={darkbg ? "items_bg darkMode" : "items_bg"}>
            <div className="items_header_bg">
                <div className="items_header">
                    <div>Amazing Deals on all Products</div>
                    <div className="items_grid_icons">
                        {
                            !grid && <div onClick={() => setGrid(true)} className="item_grid1"><IoGrid />
                                <p className="item_grid1_txt">Grid view</p>
                            </div>

                        }
                        {
                            grid && <div onClick={() => setGrid(false)} className="item_grid2"><TfiLayoutAccordionSeparated />
                                <p className="item_grid2_txt">Single view</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="items_body">

                <div className={!grid ? "items" : "items_grid"}>

                    {
                        reverseProduct.length ? (
                            reverseProduct.map((data, i) => {
                                return (
                                    <div key={i} onClick={() => { navigate(`/product/${data._id}`); toTopPage() }} className={grid ? "item" : "item item_padding"}>
                                        <div className={grid ? "item_image " : "item_image_overflow"}>
                                            <img src={`${url}/uploads/${data.image}`} alt="item" />
                                            <div className="toCart"> <IoHeartSharp /> </div>
                                        </div>
                                        {
                                            !grid && <div className={!darkbg ? "item_details" : "item_details items_dark"}>
                                                <div className="item_title">{data.title}</div>
                                                <span className=" text-muted fst-italic bg-light ps-1 pe-1" style={{ float: "right", fontSize: "13px" }}>-{parseInt(discountRate)}%</span>
                                                <div className="item_price">
                                                    <b className="item_amount text-danger pe-1">N{discount(data.price)}</b> <br></br> <span className="item_previous_price"> N{data.price}</span>
                                                </div>
                                                {/* {
                                                    !grid && <div className="items_desc">{data.description}</div>
                                                } */}
                                            </div>
                                        }
                                        {
                                            grid && <div className={!darkbg ? "items_grid_details" : "items_grid_dark"}>
                                                <div className="item_title">{(data.title).substr(0, 12)}</div>
                                                <span className=" text-muted fst-italic bg-light ps-1 pe-1" style={{ float: "right", fontSize: "13px" }}>-{parseInt(discountRate)}%</span>
                                                <div className="item_price">
                                                    <b className="item_amount text-danger pe-1">N{discount(data.price)}</b> <span className="item_previous_price"> N{data.price}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        ) : <img src={spinner} alt="spinner" className="spinner" />
                    }
                </div>
                {
                    showMore && <div className="show_more">

                        <div className="show_more_events">
                            {
                                more && <div className="">

                                    {
                                        !grid && <span onClick={() => setGrid(true)} className="item_grid1 more_events"><IoGrid />
                                        </span>

                                    }
                                    {
                                        grid && <span onClick={() => setGrid(false)} className="item_grid2 more_events"><TfiLayoutAccordionSeparated />
                                        </span>
                                    }
                                    {/* <div onClick={() => toTopPage()} className="more_events"> <IoChevronUpSharp /> </div> */}
                                </div>
                            }
                        </div>
                        <div className="show_signs">
                            {
                                !more && <span onClick={() => setMore(true)}> <IoAddCircleSharp /> </span>
                            }
                            {
                                more && <span onClick={() => setMore(false)}> <IoRemoveCircleSharp /> </span>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Items