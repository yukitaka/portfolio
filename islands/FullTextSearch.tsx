import { useState } from "preact/hooks";
import { Search, Close } from "@/components/Icons.tsx";
import SearchModal from "@/components/SearchModal.tsx";

interface Props {
  query: string
}

export default function FullTextSearch(props: Props) {
    const [isOpen, setOpen] = useState<boolean>(false);

    async function handleShow() {
      setOpen(!isOpen);
    }

    return (
        <>
            <div>
                <input type="text" name="q" value={props.query} class="px-3 text-black rounded-full" />
                <button area-label="Search" onClick={handleShow} class="pl-1"><Search /></button>
            </div>

            <SearchModal
                isOpen={isOpen}
                setOpen={setOpen}
                class="p-2 border-2 border-gray-100 rounded"
            >
                <div class="flex flex-col">
                    <button area-label="Close" onClick={handleShow} class="self-end"><Close /></button>
                    <p>Contents</p>
                </div>
            </SearchModal>
        </>
    );
}
