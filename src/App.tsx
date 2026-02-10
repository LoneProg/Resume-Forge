import NotFound from "./pages/NotFound"
import DocsPage from './pages/DocsPage';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import ResumeAsCode from "./pages/ResumeAsCode"

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} /> 


            </Routes>
            <Footer />
        </>
    );
}