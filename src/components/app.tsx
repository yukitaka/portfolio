import { h } from "preact"
import { useState } from "preact/hooks"
import Header from "@/components/header/index"
import Routes from "@/components/routes"
import GlobalStyles from "@/components/global"

async function getPost(id: number) {
    const data = await fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data))

    return data
}

export default function App() {
    const [flexAlign, setFlexAlign] = useState("flex-start")

    const post = getPost(1)
    console.log(post)
    const setAlign = (align: string) => {
        setFlexAlign(align)
    }
    return (
        <>
            <GlobalStyles verticalAlign={flexAlign} />
            <Header />
            <Routes setAlign={setAlign} />
        </>
    )
}
