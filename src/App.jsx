import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"

import Dashboard from "./components/Dashboard/Dashboard"
import AnimalProfileCreate from "./components/Animal-Profile/Animal-Profile-Create/AnimalProfileCreate"
import AnimalProfileDetails from "./components/Animal-Profile/Animal-Profile-Details/AnimalProfileDetails"
import AnimalProfileEdit from "./components/Animal-Profile/Animal-Profile-Edit/AnimalProfileEdit"

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
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/animal-profile/create" element={<AnimalProfileCreate/>}/>
                    <Route path="/animal-profile/:animalId/details" element={<AnimalProfileDetails/>}/>
                    <Route path="/animal-profile/:animalId/edit" element={<AnimalProfileEdit/>}/>
                </Routes>
                <ToastContainer limit={1}/>
            </div>

            <Footer />
        </AuthContext.Provider>
        
    )
}

export default App
