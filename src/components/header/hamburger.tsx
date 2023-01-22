import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { styled, setup } from "goober";

setup(h);

const Container = styled("div")`
  display: none;
  position: absolute;
  box-sizing: initial;
  right: 0;
  top: 0;
  margin: 3px;
  width: 20px;
  height: 20px;
  padding: 18px 23px 12px;
  line-height: 3.5rem;
  text-align: center;
  z-index: 100;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 250ms ease;

  @media (max-width: 50rem) {
    display: block;
  }

  &:hover {
    opacity: 1;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    transform-origin: center;
    background: rgba(255, 255, 255, 0.2);
    transform: scale(0);
  }
`;

const HamburgerBread = styled("div")`
  position: relative;
  width: 20px;
  height: 3px;
  border-width: 1px 0;
  margin: 0 auto 3px;
  padding: 0;
  background: #fff;
  border-radius: 1px;
  font-size: 1px;
  transition: all 200ms ease;
  transform-origin: 0 0;
`;

export default function Hamburger() {
    const [open, setOpen] = useOverlayToggle();
    const toggle = useCallback(() => setOpen(!open), [open]);

    return (
        <Container open={open} onClick={toggle}>
            <HamburgerBread />
            <HamburgerBread />
            <HamburgerBread />
        </Container>
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
