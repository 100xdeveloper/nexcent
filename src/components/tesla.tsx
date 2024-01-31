import styles from './tesla.module.scss';
import TeslaUrl from '../assets/tesla.jpg'
import Logo1 from "../assets/logo1.svg?react"
import Logo2 from "../assets/logo2.svg?react"
import Logo3 from "../assets/logo3.svg?react"
import Logo4 from "../assets/logo4.svg?react"
import Logo5 from "../assets/logo5.svg?react"
import Logo6 from "../assets/logo6.svg?react"
import Button from "./button.tsx";
import {RightIcon} from "../assets";

function Tesla() {
    return (
        <div className={styles.tesla}>
            <div>
                <img src={TeslaUrl} alt={"Tesla"}/>
            </div>
            <div className={styles.content}>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                    enim.
                    Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi
                    blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                    eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                    placerat
                    ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id
                    nibh
                    id sem dignissim finibus ac sit amet magna.</p>
                <h1>Tim Smith</h1>
                <h3>British Dragon Boat Racing Association</h3>
                <div className={styles.logos}>
                    <Logo1/>
                    <Logo2/>
                    <Logo3/>
                    <Logo4/>
                    <Logo5/>
                    <Logo6/>
                    <Button size={"large"} designType={"secondary"}>Meet all customers &nbsp; <RightIcon/></Button>
                </div>
            </div>
        </div>
    );
}

export default Tesla;