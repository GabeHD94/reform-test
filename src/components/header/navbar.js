import styled from "styled-components";

export default styled.nav`
  margin: 3vh 6vw;
  /* width: 100%; */

  img {
    width: 15vw;
    @media screen and (max-width: 700px) {
      width: 40vw;
    }
  }
  @media screen and (max-width: 700px) {
    margin: 3vw 6vw;
  }

  @media screen and (max-width: 390px) {
    /* margin: 3vw 6vw; */

    width: 20px;
  }
`;
