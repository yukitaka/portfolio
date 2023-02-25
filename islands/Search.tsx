import { useState } from "preact/hooks";
import SearchButton from "@/components/header/SearchButton.tsx";
import SearchModal from "@/components/SearchModal.tsx";

interface Data {
  query: string;
}

export default function Search<Data>({ query }) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <button type="image" class="pl-2" onClick={() => setOpen(true)}><SearchButton /></button>

            <SearchModal isOpen={isOpen} setOpen={setOpen}>
                <div>Contents</div>
            </SearchModal>
        </>
    );
}
