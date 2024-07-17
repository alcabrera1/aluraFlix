import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.svg"
import CabeceraLink from "../CabeceraLink/CabeceraLink"
function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo de Alura"/>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    HOME
                </CabeceraLink>
                <CabeceraLink url="./video">
                    NUEVO VIDEO
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Header