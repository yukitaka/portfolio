import { BiHomeSmile } from "react-icons/bi";

export default function Menu() {
    const links = ["profile", "portfolio", "skills"]
    return (
        <ul class="mt-3 flex justify-center gap-3">
            <li>
                <a href="/" style="border-style: none">
                    <BiHomeSmile size={22} />
                </a>
            </li>
            {
              links.map(name => (
                <li>
                  <a href={name} class="hover:underline hover:font-bold">{name.toUpperCase()}</a>
                </li>
              ))
            }
        </ul>
    );
}
