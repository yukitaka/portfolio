import SearchButton from "@/components/header/SearchButton.tsx";

interface Data {
  query: string;
}

export default function Search<Data>({ query }) {
    return (
        <button type="image" class="pl-2"><SearchButton /></button>
    );
}
