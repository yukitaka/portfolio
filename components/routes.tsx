import { FunctionComponent } from "preact"
import { Router, Route } from "preact-router"
import Home from "~/components/home"
import Profile from "~/components/profile"
import Portfolio from "~/components/portfolio"
import Skills from "~/components/skills"

type Props = {
  setAlign?: (align: string) => void;
};

const Routes: FunctionComponent<Props> = (props: Props) => {
    const handleRoute = async (e: { url: string }) => {
        switch (e.url) {
        case "/":
            props.setAlign?.("center")
            break
        default:
            props.setAlign?.("flex-start")
        }
    }
    return (
        <main>
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/skills" component={Skills} />
            </Router>
        </main>
    )
}

export default Routes
