import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { styled, setup } from "goober";

setup(h);

const Hamburger = styled("div")`
    display: inline-block;
    position: absolute;
    box-sizing: initial;
    right: 0;
    top: 0;
    margin: 3px;
    width: 20px;
    height: 20px;
    padding: 18px 23px 12px;
    line-height: @header-height;
    text-align: center;
    z-index: 100;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 250ms ease;
  
    &:hover {
        opacity: 1;
    }
  
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        transform-origin: center;
        bacground: rgba(255, 255, 255, 0.2);
        transform: scale(0);
`;

const Title = styled("h1")`
  width: 100%;
  height: 50px;
  margin-bottom: 0.3em;
  color: white;
  font-family: impact;
  font-size: 5em;
  text-align: center;
  letter-spacing: -0.02em;
`;

const SubTitle = styled("div")`
  text-align: right;
`;

export default function Header() {
    const [open, setOpen] = useOverlayToggle();
    const toggle = useCallback(() => setOpen(!open), [open]);

    return (
        <header>
            <Title>DOG DRIVEN ENGINEER</Title>
            <SubTitle>
                <p>Enjoy engineering of the web with dogs!</p>
            </SubTitle>
            <Hamburger open={open} onClick={toggle} />
        </header>
    );
}

function useOverlayToggle() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (open) setHeight();

        function onResize() {
            if (open) {
                if (window.innerWidth >= convertRemToPixels(50)) {
                    setOpen(false);
                }
                setHeight();
            }
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [open]);

    return [open, setOpen] as const;
}

function setHeight() {
    let vh = window.innerWidth;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function convertRemToPixels(rem: number) {
    return rem * Number(getComputedStyle(document.documentElement).fontSize);
}
