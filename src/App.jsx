import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"

import AnimalProfileCreate from "./components/Animal-profile-create/AnimalProfileCreate"

import { useAuth } from "./hooks/auth-hooks/useAuth"
import { AuthContext } from "./contexts/AuthContext"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
    const authContextData = useAuth();

    return (
        <AuthContext.Provider value={authContextData}>
            <Header />

            <div className="site">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/animal-profile/create" element={<AnimalProfileCreate/>}/>
                </Routes>
            </div>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
