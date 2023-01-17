import { h } from "preact";
import { styled, setup } from "goober";

setup(h);

const Title = styled("h1")`
  width: 100%;
  height: 50px;
  color: white;
  font-family: impact;
  font-size: 5em;
  text-align: center;
  letter-spacing: -0.02em;
`;

export default function Header() {
  return (
    <header>
      <Title>DOG DRIVEN ENGINEER</Title>
    </header>
  );
}
