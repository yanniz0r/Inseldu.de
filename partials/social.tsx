import React, { FC } from "react";
import styled from "styled-components";
import { 
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

const SocialContainer = styled.div``;

const SocialLink = styled.a`
    font-size: 2rem;
    height: 4rem;
    width: 4rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background 0.25s;
    position: relative;
    color: rgba(0,0,0,0.75);
    
    &::after{
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-radius: 50%;
        transition: all 0.25s;
        z-index: -1;
    }

    &:hover::after{
        background: rgba(255,255,255, 0.25);
        width: 100%;
        height: 100%;
    }
`;

export const Social: FC = () => {
    return <SocialContainer>
        <SocialLink href="https://github.com/yanniz0r">
            <FaGithub/>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/yanniz0r/">
            <FaInstagram/>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/yannic-inselmann-7178a415a/">
            <FaLinkedin/>
        </SocialLink>
    </SocialContainer>
}