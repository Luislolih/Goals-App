import logo from "./text-box-edit_13085560.svg";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import Bond from "../Bond/Bond";
const Header = () => {
    return (
        <header className="mainHeader">
            <div className="logo">
                <img src={logo} className="h-12"></img>
                <a href="/" className="uppercase font-semibold">
                    Metas App
                </a>
            </div>
            <nav>
                <Bond to="/profile" Icon={FaUser}></Bond>
            </nav>
        </header>
    );
};

export default Header;
