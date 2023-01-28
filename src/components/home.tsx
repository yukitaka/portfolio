import { styled } from "goober"
import { FaTwitterSquare, FaGithub } from "react-icons/fa"

const Title = styled("h1")`
  width: 100%;
  height: 50px;
  margin-bottom: 0.3em;
  color: white;
  font-family: impact;
  font-size: 5em;
  text-align: center;
  letter-spacing: -0.02em;
`

const SubTitle = styled("div")`
  text-align: right;
`

const Contact = styled("div")`
  text-align: right;
  letter-spacing: 13em;
  a {
    color: white;
  }
`

export const Home = () => {
    return (
        <div>
            <Title>DOG DRIVEN ENGINEER</Title>
            <SubTitle>
                <p>Enjoy engineering of the web with dogs!</p>
            </SubTitle>
            <Contact>
                <a href="https://twitter.com/yukitaka1974">
                    <FaTwitterSquare size={20} />
                </a>
                <a href="https://github.com/yukitaka">
                    <FaGithub size={20} />
                </a>
            </Contact>
        </div>
    )
}
