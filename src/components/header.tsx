import Logo from '../assets/logo.svg?react'
import styles from './header.module.scss'
import Button from "./button.tsx";

function Header () {
    return (
        <div className={styles.header}>
            <a href="/"><Logo className={styles.logo} /></a>
            <div className={styles.links}>
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/features">Feature</a>
                <a href="/products">Product</a>
                <a href="/testimonials">Testimonial</a>
                <a href="/faq">FAQ</a>
            </div>
            <div className={styles.buttons}>
                <Button designType={"secondary"} onClick={()=> alert("Login")}>Login</Button>
                <Button onClick={()=> alert("Sign up")}>Sign up</Button>
            </div>
        </div>
    )
}

export default Header;