import { h } from "preact"
import Header from "@/components/header/index"
import Routes from "@/components/routes"
import GlobalStyles from "@/components/global"
import "./app.css"

async function getPost(id: number) {
    const data = await fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data))

    return data
}

export default function App() {
    const post = getPost(1)
    console.log(post)

    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes />
        </>
    )
}
