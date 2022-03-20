import React from "react";
import PropTypes from "prop-types"
import { Button as BaseButton } from "antd";
import './Button.scss'
import className from 'classnames'

const Button = (props) => {
    return <BaseButton {...props} className={className('button', props.className, {
        "button--large": props.size === "large"
    })}>{props.children}</BaseButton>
};

Button.propTypes = {
    className: PropTypes.string
}

export default Button;