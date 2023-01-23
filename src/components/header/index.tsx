import { h } from "preact";
import { styled, setup } from "goober";
import Hamburger from "./hamburger";

setup(h);

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

const Menu = styled("ul")`
  display: flex;
  list-style: none;
`;

const MenuItem = styled("li")`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
`;

export default function Header() {
    return (
        <header>
            <Menu>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>SKILLS</MenuItem>
                <MenuItem>CONTACT</MenuItem>
            </Menu>
            <Title>DOG DRIVEN ENGINEER</Title>
            <SubTitle>
                <p>Enjoy engineering of the web with dogs!</p>
            </SubTitle>

            <Hamburger />
        </header>
    );
}
