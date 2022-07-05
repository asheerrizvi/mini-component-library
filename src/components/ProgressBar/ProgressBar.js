/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 / 16 + "rem",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 / 16 + "rem",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 / 16 + "rem",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <ProgressBarBase
      role="progressbar"
      aria-labelledby="loadinglabel"
      aria-valuenow={value}
      style={styles}
    >
      <Progress width={value} />
    </ProgressBarBase>
  );
};

const ProgressBarBase = styled.div`
  width: ${370 / 16 + "rem"};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  width: ${(props) => props.width + "%"};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px;
  border-top-right-radius: ${(props) =>
    !props.width || props.width === 100 ? "4px" : 0};
  border-bottom-right-radius: ${(props) =>
    !props.width || props.width === 100 ? "4px" : 0};
`;

export default ProgressBar;
