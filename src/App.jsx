import {Routes, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {
    return(
        <>
        <Header/>

        <div className="site">
            <Routes>
                    <Route path="/" element={<Home />} />
            </Routes>
        </div>

        <Footer/>
        </>
    )
}

export default App
