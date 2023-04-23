import { useContext } from "react"
import { IoList } from "react-icons/io5"
import { SiCakephp } from "react-icons/si"
import { CiBurger, CiFries, CiBeerMugFull, CiIceCream, CiPizza, CiCoffeeBean, CiForkAndKnife, CiHotdog, CiCoffeeCup } from "react-icons/ci"
import { Link } from "react-router-dom"
import { myContext } from "../../myContext"

// TfiLayoutAccordionSeparated /tfi (for single view)
function CategoryList() {
    const { darkbg } = useContext(myContext)
    return (
        <div className={!darkbg ? "category_header" : "category_header2"}>
            <div className="category_hd"><b>Our Menu</b></div>
            <div className="categoty_ul pt-2 pb-2 px-4 py-4 ">
                <span> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiForkAndKnife /> <span>Restaurant foods</span></Link> </span>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiCoffeeBean /> <span>Shawarma</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiBurger /> <span>Bugger</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiCoffeeCup /> <span>Pop Corn</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiPizza /> <span>Pizza</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiBeerMugFull /> <span>Smoothie</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiHotdog /> <span>Hotdog</span></Link> </li>

                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><SiCakephp /> <span>Cakes</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiIceCream /> <span>Ice Cream</span></Link> </li>

                <li> <Link className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}><CiFries /> <span>Chicken & Fries</span></Link> </li>
            </div>
        </div>
    )
}

export default CategoryList