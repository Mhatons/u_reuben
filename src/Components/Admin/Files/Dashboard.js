import { IoPeopleOutline, IoPersonAddOutline, IoBriefcaseOutline, IoCashOutline } from "react-icons/io5"
import arrow from "../admin img/image.webp"
import chart from "../admin img/pie_chart.svg.png"
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dash_contents">

                <div className="dash_content_bg">
                    <div className="dash_content" >
                        <h6>Staff Management</h6>
                        <div className="staff">
                            <div className="staff_show">
                                <span style={{color: "#ff06b8"}}><IoPeopleOutline /></span>
                                <p>Total Number of Staff</p>
                                <div className="staff_hide">
                                    <div><img src="" alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>43</b>
                                </div>
                            </div>
                            <div className="">
                                <span style={{color: "green"}}><IoBriefcaseOutline /></span>
                                <p>Roles & Positions</p>
                            </div>
                            <div className="staff_show">
                                <span style={{color: "orangered"}}><IoCashOutline /></span>
                                <p>Net Worth</p>
                                <div className="staff_hide">
                                    <div><img src="" alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>N560,000</b>
                                </div>
                            </div>
                        </div>
                        <div>
                        To prevent column break we should use the break-inside Property set to avoid. Syntax: column-break-inside:avoid; Example: This Example uses to prevent the column break within an element.
                        </div>
                    </div>
                </div>
                <div className="dash_content_bg">
                    <div className="dash_content">
                        <h6>Expenses & Operation Cost</h6>
                        <div className="staff">
                            <div className="staff_show">
                                <span style={{color: "#ff06b8"}}><IoPeopleOutline /></span>
                                <p>Total Number of Staff</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>43</b>
                                </div>
                            </div>
                            <div className="">
                                <span style={{color: "green"}}><IoBriefcaseOutline /></span>
                                <p>Roles & Positions</p>
                            </div>
                            <div className="staff_show">
                                <span style={{color: "orangered"}}><IoCashOutline /></span>
                                <p>Net Worth</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>N560,000</b>
                                </div>
                            </div>
                        </div>
                        <div>
                        To prevent column break we should use the break-inside Property set to avoid. Syntax: column-break-inside:avoid; Example: This Example uses to prevent the column break within an element.
                        </div>
                    </div>
                </div>
                <div className="dash_content_bg">
                    <div className="dash_content">
                        <h6>Revenue Breakdown</h6>
                        <div className="rechart">
                            <img src={chart}  alt="chart"/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,96L6.2,122.7C12.3,149,25,203,37,186.7C49.2,171,62,85,74,80C86.2,75,98,149,111,186.7C123.1,224,135,224,148,208C160,192,172,160,185,149.3C196.9,139,209,149,222,170.7C233.8,192,246,224,258,250.7C270.8,277,283,299,295,272C307.7,245,320,171,332,154.7C344.6,139,357,181,369,176C381.5,171,394,117,406,112C418.5,107,431,149,443,160C455.4,171,468,149,480,154.7C492.3,160,505,192,517,202.7C529.2,213,542,203,554,208C566.2,213,578,235,591,240C603.1,245,615,235,628,229.3C640,224,652,224,665,197.3C676.9,171,689,117,702,128C713.8,139,726,213,738,245.3C750.8,277,763,267,775,261.3C787.7,256,800,256,812,218.7C824.6,181,837,107,849,96C861.5,85,874,139,886,170.7C898.5,203,911,213,923,208C935.4,203,948,181,960,170.7C972.3,160,985,160,997,181.3C1009.2,203,1022,245,1034,224C1046.2,203,1058,117,1071,80C1083.1,43,1095,53,1108,53.3C1120,53,1132,43,1145,80C1156.9,117,1169,203,1182,213.3C1193.8,224,1206,160,1218,128C1230.8,96,1243,96,1255,85.3C1267.7,75,1280,53,1292,69.3C1304.6,85,1317,139,1329,138.7C1341.5,139,1354,85,1366,53.3C1378.5,21,1391,11,1403,32C1415.4,53,1428,107,1434,133.3L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
                        </div>
                    </div>
                </div>

                {/* <div className="dash_content_bg">
                    <div className="dash_content">
                        <h6>Expenses & Operation Cost</h6>
                        <div className="staff">
                            <div className="staff_show">
                                <span style={{color: "#ff06b8"}}><IoPeopleOutline /></span>
                                <p>Total Number of Staff</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>43</b>
                                </div>
                            </div>
                            <div className="">
                                <span style={{color: "green"}}><IoBriefcaseOutline /></span>
                                <p>Roles & Positions</p>
                            </div>
                            <div className="staff_show">
                                <span style={{color: "orangered"}}><IoCashOutline /></span>
                                <p>Net Worth</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>N560,000</b>
                                </div>
                            </div>
                        </div>
                        <div>
                        To prevent column break we should use the break-inside Property set to avoid. Syntax: column-break-inside:avoid; Example: This Example uses to prevent the column break within an element.
                        </div>
                    </div>
                </div>

                <div className="dash_content_bg">
                    <div className="dash_content">
                        <h6>Expenses & Operation Cost</h6>
                        <div className="staff">
                            <div className="staff_show">
                                <span style={{color: "#ff06b8"}}><IoPeopleOutline /></span>
                                <p>Total Number of Staff</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>43</b>
                                </div>
                            </div>
                            <div className="">
                                <span style={{color: "green"}}><IoBriefcaseOutline /></span>
                                <p>Roles & Positions</p>
                            </div>
                            <div className="staff_show">
                                <span style={{color: "orangered"}}><IoCashOutline /></span>
                                <p>Net Worth</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>N560,000</b>
                                </div>
                            </div>
                        </div>
                        <div>
                        To prevent column break we should use the break-inside Property set to avoid. Syntax: column-break-inside:avoid; Example: This Example uses to prevent the column break within an element.
                        </div>
                    </div>
                </div>

                <div className="dash_content_bg">
                    <div className="dash_content">
                        <h6>Expenses & Operation Cost</h6>
                        <div className="staff">
                            <div className="staff_show">
                                <span style={{color: "#ff06b8"}}><IoPeopleOutline /></span>
                                <p>Total Number of Staff</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>43</b>
                                </div>
                            </div>
                            <div className="">
                                <span style={{color: "green"}}><IoBriefcaseOutline /></span>
                                <p>Roles & Positions</p>
                            </div>
                            <div className="staff_show">
                                <span style={{color: "orangered"}}><IoCashOutline /></span>
                                <p>Net Worth</p>
                                <div className="staff_hide">
                                    <div><img src={arrow} alt="arrow" style={{ height: "45px" }} /></div>
                                    <b>N560,000</b>
                                </div>
                            </div>
                        </div>
                        <div>
                        To prevent column break we should use the break-inside Property set to avoid. Syntax: column-break-inside:avoid; Example: This Example uses to prevent the column break within an element.
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard