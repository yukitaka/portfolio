import { h, render } from "preact"
import { setup } from "goober"
import App from "@/components/app"
import "@/index.css"

setup(h)

render(<App />, document.querySelector("#app") as HTMLElement)
