import { useState } from "react"
import Footer from "../Files/Footer"
import Home_banner from "../Files/Home_banner"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"

function Home() {

    return (
        <div>
            <div>
                <Nav />
                <Nav2 />
                <Home_banner />
                <Footer />
            </div>
        </div>
    )
}

export default Home