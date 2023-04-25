import { useEffect } from "react"
import { createContext } from "react"
import { useState } from "react"
import logo from "./Components/images/Logo UncleReuben.png"
import spinner from "./Components/images/spinner.gif"
import { HiMoon, HiSun } from "react-icons/hi2"
import { toast } from "react-toastify"

export const myContext = createContext()

const discountRate = parseInt(5)

function PostProvider({ children }) {
    const myModal = {
        color: "green"
    }



    function deleteStaff(id) {
        fetch(`${url}/users/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    function deleteProduct(id) {
        fetch(`${url}/products/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })

        fetch(`${url}/orders/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    function deleteExpense(id) {
        fetch(`${url}/expenses/${id}`, {
            method: "DELETE"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    function reduceExpenses() {
        let sum = 0
        reverseExpenses.map((data) => {
            return (
                sum += parseInt(data.amount)
            )
        })
        setNum(sum)
        return sum
    }


    function getSalesTotal() {
        let sum = 0
        reverseSales.map((data) => {
            return (
                sum += parseInt(data.amount)
            )
        })
        setSalesTotal(sum)
        return sum
    }

    function TotalBranchSales() {
        let sum = 0
        sale.map((data) => {
            return (
                sum += parseInt(data.amount)
            )
        })
        setTotalSale(sum)
        return sum
    }

    function TotalBranchExpenses() {
        let sum = 0
        branchExpenese.map((data) => {
            return (
                sum += parseInt(data.amount)
            )
        })
        setTotalBranchExpenses(sum)
        return sum
    }


    function getProducts() {
        fetch(`${url}/products`)
            .then((resp) => resp.json())
            .then((data) => {
                setProducts(data)
            })
    }

    function getUsers() {
        fetch(`${url}/users`)
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
            })
    }

    function getRoles() {
        fetch(`${url}/roles`)
            .then((resp) => resp.json())
            .then((data) => {
                setRoles(data)
            })
    }

    function getProduct_category() {
        fetch(`${url}/product_category`)
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
    }

    function getBranches() {
        fetch(`${url}/branches`)
            .then((resp) => resp.json())
            .then((data) => {
                setBranch(data)
            })
        TotalBranchSales()
    }

    function getExpenses() {
        fetch(`${url}/expenses`)
            .then((resp) => resp.json())
            .then((data) => {
                setExpenses(data)
            })
        reduceExpenses()
        TotalBranchExpenses()
    }

    function getSales() {
        fetch(`${url}/sales`)
            .then((resp) => resp.json())
            .then((data) => {
                setSales(data)
            })
        getSalesTotal()
    }

    function getMyProducts() {
        fetch(`${url}/orders/mine/${userInfo._id}`)
            .then((resp) => resp.json())
            .then((data) => {
                if (data) {
                    setCart(data.length)
                    setOrders(data)
                }
            })
    }

    function getLocalUser() {
        let myuser = JSON.parse(localStorage.getItem("user"))
        if (myuser) {
            setUserInfo(myuser)
            setLogin(true)
            if (myuser.role_id !== "63b5786af12ca3d559688b2b") {
                setAdminLogin(true)
                setToAdmin(true)
            }

        }
    }

    function clearItem() {
        localStorage.clear()
        setLogin(false)
        setAdminLogin(false)
        setToAdmin(false)
    }

    function getLocalProdcuts() {
        const myCart = JSON.parse(localStorage.getItem("products"))
        if (myCart) {
            setCartProducts(myCart)
            // setCart(myCart.length)
        }
    }

    function dateToday(n) {
        // let date = new Date().toLocaleDateString()
        let date = new Date()

        let this_day = date.getDate()
        let this_month = date.getMonth() + 1
        let this_year = date.getFullYear()

        if (this_day <= 9) {
            this_day = "0" + this_day
        }
        if (this_month <= 9) {
            this_month = "0" + this_month
        }

        date = `${this_year}-${this_month}-${this_day}`
        return date
    }

    function toTopPage() {
        window.scrollTo(0, 0)
    }

    function discount(e){
        const rate = parseFloat(e * discountRate / 100)
        const discountPercent = e - rate
        return discountPercent
    }


    const [login, setLogin] = useState(false)
    const [adminlogin, setAdminLogin] = useState(false)
    const [toAdmin, setToAdmin] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const url = "https://unclereuben.onrender.com"

    const profilePics = `${url}/uploads/${userInfo.image}`

    const [orders, setOrders] = useState([])

    const [cart, setCart] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [darkbg, setDarkbg] = useState(false)
    const dayMode = <HiSun />
    const nightMode = <HiMoon />
    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [err, setErr] = useState(false)
    const [more, setMore] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const [products, setProducts] = useState([])
    const reverseProduct = [...products].reverse()
    const [users, setUsers] = useState([])
    const reverseUsers = [...users].reverse()
    const [roles, setRoles] = useState([])
    const reverseRoles = [...roles].reverse()
    const [categories, setCategories] = useState([])
    const reverseCategories = [...categories].reverse()
    const [branch, setBranch] = useState([])
    const reverseBranch = [...branch].reverse()
    const [expenses, setExpenses] = useState([])
    const reverseExpenses = [...expenses].reverse()
    const [sales, setSales] = useState([]);
    const reverseSales = [...sales].reverse()

    const [sale, setSale] = useState([])
    const [branchExpenese, setBranchExpenese] = useState([])

    const [cartSum, setCartSum] = useState("")




    const [grid, setGrid] = useState(true)
    const [num, setNum] = useState("")
    const [salesTotal, setSalesTotal] = useState("")
    const [totalSale, setTotalSale] = useState("")
    const [totalBranchExpenses, setTotalBranchExpenses] = useState("")

    useEffect(() => {
        getLocalUser()
        getProducts()
        getUsers()
        getRoles()
        getProduct_category()
        getBranches()
        getExpenses()
        getSales()
        getMyProducts()
        getLocalProdcuts()
    }, [products])

    const exportedDate = {
        reverseProduct,
        reverseUsers,
        deleteStaff,
        deleteProduct,
        deleteExpense,
        reverseRoles,
        reverseCategories,
        reverseBranch,
        reverseExpenses,
        reverseSales,


        num,
        salesTotal,
        sale,
        setSale,
        totalSale,
        setTotalSale,
        branchExpenese,
        setBranchExpenese,
        totalBranchExpenses,
        clearItem,
        cartSum,
        setCartSum,

        toAdmin,
        profilePics,
        logo,
        spinner,
        url,
        err,
        setErr,
        updateModal,
        setUpdateModal,
        myModal,
        modal,
        setModal,
        grid,
        setGrid,
        login,
        setLogin,
        adminlogin,
        setAdminLogin,
        cart,
        setCart,
        darkbg,
        setDarkbg,
        dayMode,
        nightMode,
        orders,
        more,
        setMore,
        showMore,
        setShowMore,
        discount,
        discountRate,

        userInfo,
        setUserInfo,
        cartProducts,
        dateToday,
        toTopPage
    }


    return (
        <myContext.Provider value={exportedDate}>
            {children}
        </myContext.Provider>
    )
}

export default PostProvider