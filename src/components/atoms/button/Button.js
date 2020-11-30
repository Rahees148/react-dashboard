import React from "react";
import PropTypes from "prop-types";
import { Style } from "./Button.style";

const Button = ({ onClick, children, type, disabled = false }) => (
  <Style.Button type={type} onClick={onClick} disabled={disabled}>
    {children}
  </Style.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
