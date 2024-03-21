import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero>
                <Outlet />
            </Hero>
            <Footer />
        </>
    );
};

export default Layout;
