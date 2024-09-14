import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"
import Sidebar from "../components/sidebar/Sidebar.jsx"




export function TemplatePrivado() {
    const { user } = useAuth()

    return user ? (
        <div className="layout">
            <Sidebar />
            <main className="content" aria-label="Main Content">
                <Outlet />
            </main>
        </div>
    ) : (
        <Navigate to="/" />
    )
}