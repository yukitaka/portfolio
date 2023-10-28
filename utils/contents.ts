import { extract } from "$std/front_matter/mod.ts";
import { join } from "$std/path/posix.ts";
import { Marked } from "marked/mod.ts";

const DIRECTORY = "./contents";

export interface Content {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
}

export async function getContents(): Promise<Content[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getContent(slug));
  }
  const contents = await Promise.all(promises) as Content[];
  contents.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return contents;
}

export async function getContent(slug: string): Promise<Content | null> {
  try {
    const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
    const markup = Marked.parse(text);
    return {
      slug,
      title: markup.meta.title,
      publishedAt: new Date(markup.meta.published_at),
      content: markup.content
    };
  } catch(e) {
    if (e instanceof Deno.errors.NotFound) {
      return false;
    }
  }
}
