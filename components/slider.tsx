import React, { FC, useState, Children } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Slide = styled.div`
    width: 100%;
    padding: 0 16px;
`;

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    align-items: center;
    display: grid;
    grid-template-columns: min-content auto min-content;
    overflow: hidden;
`;

const SlideWrapper = styled.div<{ active: number }>`
    display: flex;
    align-items: center;
    width: ${props => Children.count(props.children) * 100}%;
    margin-left: -${props => props.active * 100}%;
    transition: all 1.25s;
`;

export const Slider: FC = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const previousSlide = () => {
        setActiveSlide(activeSlide <= 0 ? Children.count(children) : activeSlide - 1);
    }

    const nextSlide = () => {
        setActiveSlide((activeSlide + 1) % Children.count(children));
    }
    
    return <SliderWrapper>
        <a onClick={previousSlide}>
            <FaChevronLeft/>
        </a>
        <SlideWrapper active={activeSlide}>
            {children}
        </SlideWrapper>
        <a onClick={nextSlide}>
            <FaChevronRight/>
        </a>
    </SliderWrapper>
}