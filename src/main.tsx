import { render } from "preact"
import App from "@/components/app"
import "@/index.css"

render(<App />, document.querySelector("#app") as HTMLElement)
