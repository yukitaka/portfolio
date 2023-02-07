import { Handlers, PageProps } from "$fresh/server.ts";
import { getContent, getContents, Content } from "@/utils/contents.ts";
import { FaTwitterSquare, FaGithub } from "react-icons/fa";
import MainTitle from "@/components/title.tsx";

export const handler: Handlers<Content[]> = {
  async GET(_req, ctx) {
    const contents = await getContents();
    return ctx.render(contents);
  },
};

export default function ContentIndexPage(props: PageProps<Content[]>) {
  const contents = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <MainTitle />
      <div class="mt-5 text-right tracking-widest gap-3">
        <a class="inline-flex px-1" href="https://twitter.com/yukitaka1974">
          <FaTwitterSquare size={20} />
        </a>
        <a class="inline-flex" href="https://github.com/yukitaka">
          <FaGithub size={20} />
        </a>
      </div>
      <div class="mt-8">
        {contents.map((content) => <ContentCard content={content} />)}
      </div>
    </main>
  );
}

function ContentCard(props: { content: Content }) {
  const { content } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${content.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {content.title}
        </h3>
        <time class="text-gray-500">
          {new Date(content.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </a>
    </div>
  );
}
