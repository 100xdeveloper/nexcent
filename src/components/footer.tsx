import styles from './footer.module.scss'
import Logo from '../assets/logo.svg?react'
import Instagram from '../assets/instagram.svg?react'
import Network from '../assets/network.svg?react'
import Twitter from '../assets/twitter.svg?react'
import Youtube from '../assets/youtube.svg?react'
import Send from '../assets/send.svg?react'

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.column1}>
                <Logo className={styles.logo}/>
                <div className={styles.h3s}>
                    <h3>Copyright © 2020 Nexcent ltd.</h3>
                    <h3>All rights reserved</h3>
                </div>
                <div className={styles.icons}>
                    <a href=""><Instagram/></a>
                    <a href=""><Network/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Youtube/></a>
                </div>
            </div>
            <div className={styles.column2}>
                <h1>Company</h1>
                <a href="#">About us</a>
                <a href="#">Blog</a>
                <a href="#">Contact us</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
            </div>
            <div className={styles.column2}>
                <h1>Support</h1>
                <a href="">Help center</a>
                <a href="">Terms of service</a>
                <a href="">Legal</a>
                <a href="">Privacy policy</a>
                <a href="">Status</a>
            </div>
            <div className={styles.column3}>
                <h1>Stay up to date</h1>
                <div>
                    <input type="text" placeholder={"Your email address"}/>
                    <Send/>
                </div>
            </div>
        </div>
    )
}

export default Footer