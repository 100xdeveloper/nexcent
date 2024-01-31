import styles from './demo.module.scss'
import Button from "./button.tsx";
import {RightIcon} from "../assets";

function Demo () {
    return (
        <div className={styles.demo}>
            <h1>Pellentesque suscipit fringilla libero eu.</h1>
            <Button size={"large"}>Get a Demo &nbsp; <RightIcon/></Button>
        </div>
    )
}

export default Demo