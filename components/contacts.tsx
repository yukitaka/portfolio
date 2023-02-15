import { FaTwitterSquare, FaGithub } from "react-icons/fa";

export default function Contacts() {
  return (
    <div class="mt-5 text-right tracking-widest gap-3 pr-8">
      <a class="inline-flex px-1" href="https://twitter.com/yukitaka1974">
        <FaTwitterSquare size={20} />
      </a>
      <a class="inline-flex" href="https://github.com/yukitaka">
        <FaGithub size={20} />
      </a>
    </div>
  );
}
