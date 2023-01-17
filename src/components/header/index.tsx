import { h } from "preact";
import { styled, setup } from "goober";

setup(h);

const Container = styled("div")`
  width: 200px;
  height: 50px;
  color: blue;
`;

export default function Header() {
  return (
    <header>
      <Container>This is header</Container>
    </header>
  );
}
