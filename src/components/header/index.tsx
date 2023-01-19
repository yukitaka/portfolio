import { h } from "preact";
import { styled, setup } from "goober";

setup(h);

const Hamburger = styled("div")`
  display: block;
  position: absolute;
  box-sizing: initial;
  right: 0;
  top: 0;
  margin: 3px;
  width: 20px;
  height: 20px;
  padding: 18px 23px 12px;
  line-height: @header-height;
  text-align: center;
  z-index: 100;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 250ms ease;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    transform-origin: center;
    bacground: rgba(255, 255, 255, 0.2);
    transform: scale(0);
`;

const Title = styled("h1")`
  width: 100%;
  height: 50px;
  margin-bottom: 0.3em;
  color: white;
  font-family: impact;
  font-size: 5em;
  text-align: center;
  letter-spacing: -0.02em;
`;

const SubTitle = styled("div")`
  text-align: right;
`;

export default function Header() {
  return (
    <header>
      <Title>DOG DRIVEN ENGINEER</Title>
      <SubTitle>
        <p>Enjoy engineering of the web with dogs!</p>
      </SubTitle>
      <Hamburger />
    </header>
  );
}
