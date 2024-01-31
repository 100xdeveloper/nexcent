import styles from './button.module.scss'
import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";

type ButtonProps = {
    designType?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
} & ComponentPropsWithoutRef<'button'>

function Button (props: ButtonProps) {

    const {
        designType = "primary",
        size = "medium",
        ...rest
    } = props;

    return (
        <button className={clsx(styles.button, styles[designType], styles[size])} {...rest}/>
    )
}

export default Button