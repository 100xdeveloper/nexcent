import styles from './unlock.module.scss'
import Rafiki from '../assets/rafiki.svg?react'
import Button from "./button.tsx";

function Unlock () {
    return (
        <div className={styles.unlock}>
            <Rafiki className={styles.rafiki}/>
            <div>
                <h1>The unseen of spending three years at Pixelgrade</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.</h3>
                <Button size={"large"}>Learn More</Button>
            </div>
        </div>
    )
}

export default Unlock