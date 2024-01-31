import Illustration from '../assets/illustration.svg?react'
import styles from './subheader.module.scss'
import Button from "./button.tsx";
import {useState} from "react";
import clsx from "clsx";

function Subheader () {
    const [activeSlide, setActiveSlide] = useState(0)

    return(
        <div className={styles.subheader}>
            <div className={clsx(styles.slide, activeSlide === 0 && styles.active)}>
                <div className={styles.left}>
                    <h1>Lessons and insights<br/><span>from 8 years</span></h1>
                    <h3>Where to grow your business as a photographer: site or social media?</h3>
                    <Button size={"large"}>Register</Button>
                </div>
                <Illustration/>
            </div>
            <div className={clsx(styles.slide, activeSlide === 1 && styles.active)}>
                <div className={styles.left}>
                    <h1>Lessons and insights<br/><span>from 9 years</span></h1>
                    <h3>Where to grow your business as a photographer: site or social media?</h3>
                    <Button size={"large"}>Register</Button>
                </div>
                <Illustration/>
            </div>
            <div className={clsx(styles.slide, activeSlide === 2 && styles.active)}>
                <div className={styles.left}>
                    <h1>Lessons and insights<br/><span>from 10 years</span></h1>
                    <h3>Where to grow your business as a photographer: site or social media?</h3>
                    <Button size={"large"}>Register</Button>
                </div>
                <Illustration/>
            </div>
            <div className={styles.dots}>
                <div className={clsx(activeSlide === 0 && styles.active)} onClick={() => setActiveSlide(0)}></div>
                <div className={clsx(activeSlide === 1 && styles.active)} onClick={() => setActiveSlide(1)}></div>
                <div className={clsx(activeSlide === 2 && styles.active)} onClick={() => setActiveSlide(2)}></div>
            </div>
        </div>
    )
}

export default Subheader;