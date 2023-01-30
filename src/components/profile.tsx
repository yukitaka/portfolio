import { h } from "preact"
import { styled } from "goober"

const Title = styled("h1")`
  width: 700px;
  height: 50px;
  margin-bottom: 0.3em;
  color: white;
  font-family: impact;
  font-size: 5em;
  text-align: center;
  letter-spacing: -0.02em;
`

export const Profile = () => {
    return (
        <div>
            <Title>PROFILE</Title>
        </div>
    )
}
