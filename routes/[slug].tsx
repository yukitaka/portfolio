import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getContent, Content } from "@/utils/contents.ts";
import { CSS, render } from "$gfm";

export const handler: Handlers<Content> = {
  async GET(_req, ctx) {
    const content = await getContent(ctx.params.slug);
    return ctx.render(content as Content);
  },
};

export default function ContentPage(props: PageProps<Content>) {
  const content = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class="max-w-screen-md px-4 pt-8 mx-auto">
        <h1 class="text-2xl font-bold pl-2 pb-1 border-b-2 border-dotted w-screen align-top">{content.title}</h1>
      </main>
    </>
  );
}
