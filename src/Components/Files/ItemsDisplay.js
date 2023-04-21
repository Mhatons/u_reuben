import { useContext } from "react"
import { myContext } from "../../myContext"
import item2 from "../images/strawberrysmoothie.jpg"

function ItemsDisplay() {

    const {darkbg} = useContext(myContext)


    return (
        <div>
            <section className={!darkbg ? "xtr_items_bg": "xtr_items_bg darkNav"}>
                <div className="xtr_items_header">
                    <h6 className="xtr_items_txt">More To Love</h6>
                    <div className="xtr_items">

                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>
                        <div className="xtr_item">
                            <img src={item2} alt="" />
                            <div>
                                <b>N1,580</b>
                                <div>Tasty bugger with yummy sausages</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ItemsDisplay