import React from "react";

import * as Styled from "./styled-components";
import peapoleLogo from "../../assets/people.png";

export function HeaderSection() {
  return (
    <Styled.Header>
      <Styled.MainLogoImg src={peapoleLogo} alt="logo" />
    </Styled.Header>
  );
}
