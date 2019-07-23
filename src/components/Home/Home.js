import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Settings, { SettingsPropTypes, SettingsDefaultProps } from "../Settings";

/**
 * Defines the prop types
 */
const propTypes = {
  ...SettingsPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SettingsDefaultProps
};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const Home = props => {
  const url = Settings();
  //const { url } = props;

  return (
    <Container className="Home">
      <p>Home</p>
      <p>Url: {url}</p>
    </Container>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes, defaultProps };
