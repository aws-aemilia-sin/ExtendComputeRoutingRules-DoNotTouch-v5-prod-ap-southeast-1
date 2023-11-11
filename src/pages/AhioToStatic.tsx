import styled from "@emotion/styled";
import { useEffect } from "react";

export const AhioToStatic = () => {
  useEffect(() => {
    document.title = "AHIO to Static";
  }, []);

  return (
    <Container>
        Fallback from AHIO
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  line-height: 2em;
`;
