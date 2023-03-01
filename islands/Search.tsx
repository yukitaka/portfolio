import { useState } from "preact/hooks";
import SearchButton from "@/components/header/SearchButton.tsx";
import SearchModal from "@/components/SearchModal.tsx";

interface Props {
  query: string
}

export default function Search(props: Props) {
    const [isOpen, setOpen] = useState<boolean>(false);

    async function handleSearch() {
      setOpen(true);
    }

    return (
        <>
            <div>
                <input type="text" name="q" value={props.query} class="px-3 text-black rounded-full" />
                <button area-label="Search" onClick={handleSearch} class="pl-1"><SearchButton /></button>
            </div>

            <SearchModal
                isOpen={isOpen}
                setOpen={setOpen}
                class="p-2 border-2 border-gray-100 rounded"
            >
                <div class="frex flex-col"><p>Contents</p></div>
            </SearchModal>
        </>
    );
}
