import { Head } from "$fresh/runtime.ts";
import { useRef, useEffect } from "preact/hooks";
import docsearch from "https://esm.sh/@docsearch/js@3";

export default function FullTextSearch() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            docsearch({
                appId: "VRFSECN91L",
                apiKey: "651e5937ea652e7717e9386494277535",
                indexName: "portfolio",
                container: ref.current,
            });
        }
    }, [ref.current]);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="/docsearch.css"
                />
            </Head>
            <div class="h-9" ref={ref}></div>
        </>
    );
}
