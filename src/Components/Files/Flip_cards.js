
const FlipCards = ({
 img1,
 img2,
 name,
 price
}) => {


 return (
    <div className="flip_box">
        <div className="flip_images item_gallery_container">
            <div className="flip_img1">
                <img src={img1} alt="image" />
            </div>
            <div className="flip_img2">
                <img src={img2} alt="image" />
            </div>
        </div>
        <div className="item_gallery_txt">
            <span className="item_gallery_name">{name}</span> <div></div>
            <span className="item_gallery_price">From NGN {price}</span>
        </div>
    </div>
 );
}
 
export default FlipCards;