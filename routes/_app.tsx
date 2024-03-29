import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import Menu from "@/components/header/Menu.tsx";
import Footer from "@/components/Footer.tsx";
import FullTextSearch from "@/islands/FullTextSearch.tsx";

export default function App({ Component }: AppProps) {
  const code = `function global_dark(change) {
    if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
  }
  global_dark();`;
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </Head>
      <body className="bg-gray-800 text-gray-100">
        <header className="mt-3 flex justify-center items-center gap-3 w-screen">
          <Menu query="" />
          <FullTextSearch />
        </header>
        <main className="container mx-auto p-4 flex">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
