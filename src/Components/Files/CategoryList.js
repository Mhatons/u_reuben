import { useContext } from "react"
import { SiCakephp } from "react-icons/si"
import { CiBurger, CiFries, CiBeerMugFull, CiIceCream, CiPizza, CiCoffeeBean, CiForkAndKnife, CiHotdog, CiCoffeeCup } from "react-icons/ci"
import { myContext } from "../../myContext"

// TfiLayoutAccordionSeparated /tfi (for single view)
function CategoryList() {
    const categoryList = [
        {
            id: 1,
            icon: <CiForkAndKnife />,
            name: "Restaurant foods"
        },
        {
            id: 2,
            icon: <CiCoffeeBean />,
            name: "Shawarma"
        },
        {
            id: 3,
            icon: <CiBurger />,
            name: "Burger"
        },
        {
            id: 4,
            icon: <CiCoffeeCup />,
            name: "Pop Corn"
        },
        {
            id: 5,
            icon: <CiPizza />,
            name: "Pizza"
        },
        {
            id: 6,
            icon: <CiBeerMugFull />,
            name: "Smoothie"
        },
        {
            id: 7,
            icon: <CiHotdog />,
            name: "Hot Dog"
        },
        {
            id: 8,
            icon: <SiCakephp />,
            name: "Cakes"
        },
        {
            id: 9,
            icon: <CiIceCream />,
            name: "Ice Cream"
        },
        {
            id: 10,
            icon: <CiFries />,
            name: "Chicken & Fries"
        },
    ]
    const { darkbg } = useContext(myContext)
    return (
        <div className={!darkbg ? "category_header" : "category_header2"}>
            <div className="category_hd"><b>Our Menu</b></div>
            <div className="categoty_ul pt-2 pb-2 px-4 py-4 ">
                {
                    categoryList.map((info, i) => {
                        return(
                            <div
                            key={i}
                            className={!darkbg ? "categoty_li" : "categoty_li categoty_li2"}>
                                {info.icon} 
                                <span>{info.name}</span> 
                            </div >
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList