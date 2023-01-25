import { h } from "preact"
import { styled, setup } from "goober"

setup(h)

const MenuContainer = styled("ul")`
  position: absolute;
  top: 0;
  display: flex;
  list-style: none;
`

const MenuItem = styled("li")`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
`

export default function Menu() {
    return (
        <MenuContainer>
            <MenuItem>ABOUT</MenuItem>
            <MenuItem>SKILLS</MenuItem>
            <MenuItem>CONTACT</MenuItem>
        </MenuContainer>
    )
}
