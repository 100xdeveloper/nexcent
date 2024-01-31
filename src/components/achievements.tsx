import styles from './achievements.module.scss'
import Members from '../assets/members.svg?react'
import Bookings from '../assets/bookings.svg?react'
//import Clubs from '../assets/clubs.svg?react'
import ClubsUrl from '../assets/clubs.png'
import Payments from '../assets/payments.svg?react'

function Achievements () {
    return (
        <div className={styles.achievements}>
            <div>
                <h1>Helping a local<br/><span>business reinvent itself</span></h1>
                <h3>We reached here with our hard work and dedication</h3>
            </div>
            <div className={styles.statswrapper}>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Members className={styles.icon}/>
                        <div>
                            <h1>2,245,341</h1>
                            <h3>Members</h3>
                        </div>
                    </div>
                    <div className={styles.stat}>
                        {/*<Clubs className={styles.icon}/>*/}
                        <img src={ClubsUrl} alt="" className={styles.icon}/>
                        <div>
                            <h1>46,328</h1>
                            <h3>Clubs</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Bookings className={styles.icon}/>
                        <div>
                            <h1>826,867</h1>
                            <h3>Event Bookings</h3>
                        </div>
                    </div>

                    <div className={styles.stat}>
                        <Payments className={styles.icon}/>
                        <div>
                            <h1>1,926,436</h1>
                            <h3>Payments</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements