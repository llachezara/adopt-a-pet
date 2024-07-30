import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"

import { useAuth } from "./hooks/auth-hooks/useAuth"
import { AuthContext } from "./contexts/AuthContext"

function App() {
    const authContextData = useAuth();

    return (
        <AuthContext.Provider value={authContextData}>
            <Header />

            <div className="site">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/register" element={<Register />} />
                </Routes>
            </div>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
