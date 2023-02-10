import { Handlers, PageProps } from "$fresh/server.ts";
import { getContent, getContents, Content } from "@/utils/contents.ts";
import MainTitle from "@/components/title.tsx";
import Contacts from "@/components/contacts.tsx";

export const handler: Handlers<Content[]> = {
  async GET(_req, ctx) {
    const content = await getContent("index");
    return ctx.render(content as Content);
  },
};

export default function ContentIndexPage(props: PageProps<Content>) {
  const content = props.data;
  return (
    <div class="max-w-screen-md px-4 pt-16 mx-auto">
      <MainTitle />
      <Contacts />
      <div class="max-w-screen-md px-4 pt-16 mx-auto">
        <p>{content.content}</p>
      </div>
    </div>
  );
}

