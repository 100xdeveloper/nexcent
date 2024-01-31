import styles from './clients.module.scss'
import Logo1 from "../assets/logo1.svg?react"
import Logo2 from "../assets/logo2.svg?react"
import Logo3 from "../assets/logo3.svg?react"
import Logo4 from "../assets/logo4.svg?react"
import Logo5 from "../assets/logo5.svg?react"
import Logo6 from "../assets/logo6.svg?react"
import Logo7 from "../assets/logo7.svg?react"

console.log(styles)

function Clients () {
    return (
        <div className={styles.clients}>
            <h1>Our Clients</h1>
            <h3>We have been working with some Fortune 500+ clients</h3>
            <div className={styles.logos}>
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
                <Logo5 />
                <Logo6 />
                <Logo7 />
            </div>
        </div>
    )
}

export default Clients