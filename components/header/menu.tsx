import { BiHomeSmile } from "react-icons/bi";

export default function Menu() {
    return (
        <ul class="mt-3 flex justify-center gap-3">
            <li>
                <a href="/" style="border-style: none">
                    <BiHomeSmile size={22} />
                </a>
            </li>
            <li>
                <a href="/profile">PROFILE</a>
            </li>
            <li>
                <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li>
                <a href="/skills">SKILLS</a>
            </li>
        </ul>
    );
}
