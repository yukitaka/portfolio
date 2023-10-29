import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Contacts from "@/components/Contacts.tsx";

export default function ContentIndexPage(props: PageProps<Content>) {
  const imgUrl = new URL(asset("/main.png"), props.url).href;
  const content = props.data;
  return (
    <div className="max-w-screen-md px-4 pt-16 mx-auto flex flex-wrap flex-row w-screen">
      <div className="block max-w-sm p-6 border-y-2 border-r-2 border-gray-200 rounded-r-lg shadow w-1/2">
        <h5 className="text-2xl font-bold tracking-tight text-white">Sato Takayuki</h5>
        <p className="mb-2 text-sm text-gray-400">佐藤 貴之</p>
        <ol className="font-normal text-gray-400 list-disc list-inside">
          <li>Birthday: 1974-03-19</li>
          <li>Location: Tokyo</li>
        </ol>
      </div>
    </div>
  );
}

