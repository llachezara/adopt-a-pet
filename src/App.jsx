import {Routes, Route} from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

function App() {
    return(
        <>
        <Header/>

        <div className="site">
            <Routes>
                    <Route path="/" element={<Home />} />
            </Routes>
        </div>
        </>
    )
}

export default App
