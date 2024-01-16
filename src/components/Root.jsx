import React from "react";
import { styled } from 'styled-components'
import { Main } from "./blocks/main/Main";
import { Face } from "./blocks/face/Face";

const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
  background: white;
  background-image: url();
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

function Root() {
  return (
    <StyledMain>
      <Face />
      <Main />
    </StyledMain>
  );
}

export default Root;