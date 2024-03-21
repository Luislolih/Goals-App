import Bond from "../Bond/Bond";
import styles from "./Hero.module.css";
import { MdCreateNewFolder } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
const Hero = ({ children }) => {
    return (
        <div className={styles.principal}>
            <aside className={styles.aside}>
                <Bond to="/list" text="Lista de Metas" Icon={FaListAlt}></Bond>
                <Bond
                    to="/new"
                    text="Nueva Meta"
                    Icon={MdCreateNewFolder}
                ></Bond>
            </aside>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Hero;
