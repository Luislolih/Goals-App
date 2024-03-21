import styles from "./Bond.module.css";
import { Link } from "react-router-dom";
const Bond = ({ Icon, text, to }) => {
    return (
        <Link to={to} className={styles.vinculo}>
            <Icon className={styles.icon} />
            <span className={styles.text}>{text}</span>
        </Link>
    );
};

export default Bond;
