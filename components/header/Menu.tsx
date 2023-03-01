import { BiHomeSmile } from "react-icons/bi";

interface Data {
  query: string;
}

export default function Menu<Data>({ query }) {
    const links = ["profile", "skills"]
    return (
        <ul class="flex gap-3">
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
