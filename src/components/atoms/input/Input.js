import React from "react";
import PropTypes from "prop-types";
import { Style } from "./Input.style";

const Input = ({
  type = "text",
  onChange,
  onKeyDown,
  value,
  placeholder,
  disabled = false,
  fieldError = false,
  autoFocus = false,
}) => (
  <Style.Input
    type={type}
    fieldError={fieldError}
    onChange={(e) => onChange(e)}
    onKeyDown={(e) => onKeyDown(e)}
    value={value}
    placeholder={placeholder}
    autoFocus={autoFocus}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  fieldError: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};

export default Input;
