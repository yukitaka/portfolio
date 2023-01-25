import { h, Component } from "preact"
import { Router } from "preact-router"
import { Home } from "@/components/home"

export default class Routes extends Component {
    handleRoute = (event) => {
        const { onChange } = this.props
        if (onchange) {
            onChange(event)
        }
    }
    render({ url }) {
        console.log(url)
        return (
            <main>
                <Router>
                    <Home path="/" />
                </Router>
            </main>
        )
    }
}
