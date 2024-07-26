import {Routes, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"

function App() {
    return(
        <>
        <Header/>

        <div className="site">
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/register" element={<Register />} />
            </Routes>
        </div>

        <Footer/>
        </>
    )
}

export default App
