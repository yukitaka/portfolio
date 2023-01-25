import { h } from "preact"
import { styled, setup } from "goober"

setup(h)

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

export const Home = () => {
    return (
        <div>
            <Title>DOG DRIVEN ENGINEER</Title>
            <SubTitle>
                <p>Enjoy engineering of the web with dogs!</p>
            </SubTitle>
        </div>
    )
}
