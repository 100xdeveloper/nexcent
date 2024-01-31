import styles from './community-updates.module.scss';
import CardImage1 from '../assets/card-1.jpg'
import CardImage2 from '../assets/card-2.jpg'
import CardImage3 from '../assets/card-3.jpg'
import Button from "./button.tsx";
import {RightIcon} from "../assets";

function CommunityUpdates() {
    return (
        <div className={styles.updates}>
            <h1>Caring is the new marketing</h1>
            <h3>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See
                who's joining the community, read about how our community are increasing their membership income and
                lot's more.</h3>
            <div className={styles.cards}>
                <Card image={CardImage1} text={"Creating Streamlined Safeguarding Processes with OneRen"}/>
                <Card image={CardImage2} text={"What are your safeguarding responsibilities and how can you manage them?"}/>
                <Card image={CardImage3} text={"Revamping the Membership Model with Triathlon Australia"}/>
            </div>
        </div>
    );
}

function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <img src={props.image} alt="image"/>
            <div>
                <h1>{props.text}</h1>
                <Button designType={"secondary"}>Read More &nbsp; <RightIcon/></Button>
            </div>
        </div>
    )
}

type CardProps = {
    image: string
    text: string
}

export default CommunityUpdates;