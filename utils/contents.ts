import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/mod.ts";
import { Marked } from "$gfm";

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
    const md = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
    const extracted = extract(md);
    const meta = extracted.attrs;
    const markup = Marked.marked.parse(extracted.body);
    return {
      slug,
      title: meta.title as string,
      publishedAt: new Date(meta.published_at as string),
      content: markup
    };
  } catch(e) {
    if (e instanceof Deno.errors.NotFound) {
      return null;
    }
  }

  return null;
}
