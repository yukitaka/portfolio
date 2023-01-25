import { h } from "preact"
import Menu from "./menu"
import Hamburger from "./hamburger"

export default function Header() {
    return (
        <header>
            <Menu />
            <Hamburger />
        </header>
    )
}
