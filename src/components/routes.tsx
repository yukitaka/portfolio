import { Component } from "preact"
import { Router, Route } from "preact-router"
import { Home } from "@/components/home"
import { Profile } from "@/components/profile"
import { Portfolio } from "@/components/portfolio"

export default class Routes extends Component {
    render() {
        return (
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/portfolio" component={Portfolio} />
                </Router>
            </main>
        )
    }
}
