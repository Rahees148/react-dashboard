import React from "react";
import PropTypes from "prop-types";
import { Style } from "./Title.style";

const Title = ({ children }) => <Style.Title>{children}</Style.Title>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
