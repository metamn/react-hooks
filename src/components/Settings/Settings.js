import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useData } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  url: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  url: "www.inu.ro"
};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const Settings = props => {
  return useData();
};

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

export default Settings;
export { propTypes as SettingsPropTypes, defaultProps as SettingsDefaultProps };
