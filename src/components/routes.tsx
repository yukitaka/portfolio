import { h, Component } from "preact"
import { Router } from "preact-router"
import { Home } from "@/components/home"
import { Profile } from "@/components/profile"

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
                    <Profile path="/profile" />
                </Router>
            </main>
        )
    }
}
