import { RiHome6Fill } from "react-icons/ri";

export default function Menu() {
    return (
        <ul class="mt-3 flex justify-center gap-3">
            <li>
                <a href="/">
                    <RiHome6Fill size={22} />
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
