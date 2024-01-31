import styles from './unlock.module.scss'
import Pana from '../assets/pana.svg?react'
import Button from "./button.tsx";

function MobileLogin() {
    return (
        <div className={styles.unlock}>
            <Pana className={styles.rafiki}/>
            <div>
                <h1>How to design your site footer like we did</h1>
                <h3>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                    euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                    faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.</h3>
                <Button size={"large"}>Learn More</Button>
            </div>
        </div>
    )
}

export default MobileLogin