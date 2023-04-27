import slide3 from "../images/istockphoto-1309912088-612x612.jpg"
import slide2 from "../images/IMG_delicious-chicken-table-848x565.jpg"
import slide1 from "../images/pizza-5179939_1920.jpg"
import slide4 from "../images/333163018_117208274632470_8841863388902976207_n.jpg"
import video from "../images/video.58db49b42c46e5f85375.mp4"
import { Link } from "react-router-dom"
import DeliveryHeader from "./DeliverHeader"
function HomeSilder() {
    return (
        <div>
            <div className="home_slider">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    {/* <div className="menu_ul">
                        <div> <Link className="menu_list">Super deals</Link> </div>
                        <div> <Link className="menu_list">Soft refreshments</Link> </div>
                        <div> <Link className="menu_list">Yummy delicacies</Link> </div>
                        <div> <Link className="menu_list">Order Now</Link> </div>
                    </div> */}
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active img_header">
                            <img src={slide4} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item img_header">
                            <img src={slide1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item img_header">
                            <img src={slide3} class="d-block w-100" alt="..." />
                        </div>
                        {/* <div class="carousel-item img_header">
                            <img src={slide4} class="d-block w-100" alt="..." />
                        </div> */}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <div>
                    <iframe className="banner_video" src="https://media.istockphoto.com/id/1161244029/video/friends-raising-a-toast.mp4?s=mp4-640x640-is&k=20&c=rptAfU56xxCSDD3ZQ0OJL6uyPB2d6p4s3Gir1Qo2OUk=" width="100%" height="100%"></iframe>
                </div> */}

                <DeliveryHeader />
            </div>

        </div>
    )
}

export default HomeSilder