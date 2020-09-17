import React, { FC, useState, Children, useDebugValue } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Slide = styled.div`
    width: 100%;
    padding: 0 64px;
`;

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    align-items: center;
`;

const SlideWrapper = styled.div<{ active: number }>`
    display: flex;
    align-items: center;
    width: ${props => Children.count(props.children) * 100}%;
    margin-left: -${props => props.active * 100}%;
    transition: all 1.25s;
`;

const SliderActions = styled.div`
    position: absolute;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
`;

const SliderAction = styled.a`
    display: flex;
    height: 100%;
    position: absolute;
    align-items: center;
    cursor: pointer;
    padding: 16px;
`;

const PrevLink = styled(SliderAction)`
    left: 0;
`;

const NextLink = styled(SliderAction)`
    right: 0;
`;

export const Slider: FC = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const previousSlide = () => {
        setActiveSlide(activeSlide <= 0 ? Children.count(children) - 1 : activeSlide - 1);
    }

    const nextSlide = () => {
        setActiveSlide((activeSlide + 1) % Children.count(children));
    }
    useDebugValue(activeSlide);

    return <SliderWrapper>
        <PrevLink onClick={previousSlide}>
            <FaChevronLeft/>
        </PrevLink>
        <NextLink onClick={nextSlide}>
            <FaChevronRight/>
        </NextLink>
        <SlideWrapper active={activeSlide}>
            {children}
        </SlideWrapper>
    </SliderWrapper>
}