import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface HiderProps {
    visible: boolean;
    delay: number;
}

const Hider = styled.div<HiderProps>`
    transition: all 1.5s;
    opacity: ${props => props.visible ? 1 : 0};
    transition-delay: ${props => props.delay}s;
`;

interface AppearProps {
    delay?: number;
}

export const Appear: FC<AppearProps> = (props) => {
    const [isVisible, setVisible] = useState(false);
    const hiderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (process.browser) {
            window.addEventListener("scroll", () => {
                if (hiderRef.current) {
                    const elementBottomY = hiderRef.current.clientHeight + hiderRef.current.clientTop;
                    setVisible(window.scrollY >= elementBottomY);
                }
            });
        }
    }, []);

    console.log(isVisible)

    return <Hider visible={isVisible} ref={hiderRef} delay={props.delay || 0}>
        {props.children}
    </Hider>
}