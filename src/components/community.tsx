import Icon1 from "../assets/icon1.svg?react"
import Icon2 from "../assets/icon2.svg?react"
import Icon3 from "../assets/icon3.svg?react"
import styles from "./community.module.scss"


function Community () {
    return (
        <div className={styles.community}>
            <h1>Manage your entire community<br/>in a single system</h1>
            <h3>Who is Nextcent suitable for?</h3>
            <div className={styles.cards}>
                <div>
                    <Icon1/>
                    <h1>Membership Organisations</h1>
                    <h3>Our membership management software provides full automation of membership renewals and payments</h3>
                </div>
                <div>
                    <Icon2/>
                    <h1>National Associations</h1>
                    <h3>Our membership management software provides full automation of membership renewals and payments</h3>
                </div>
                <div>
                    <Icon3/>
                    <h1>Clubs And Groups</h1>
                    <h3>Our membership management software provides full automation of membership renewals and payments</h3>
                </div>
            </div>
        </div>
    )
}

export default Community