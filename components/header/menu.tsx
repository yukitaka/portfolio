import { BiHomeSmile } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

interface Data {
  query: string;
}

export default function Menu<Data>({ query }) {
    const links = ["profile", "skills"]
    return (
        <ul class="mt-3 flex justify-center items-center gap-3">
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
            <li>
                <form>
                    <input type="text" name="q" value={query} class="text-black rounded-full" />
                    <button type="image" class="pl-2"><FaSearch size={16} /></button>
                </form>
            </li>
        </ul>
    );
}
