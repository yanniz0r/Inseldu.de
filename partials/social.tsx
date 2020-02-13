import React, { FC } from "react";
import styled from "styled-components";
import { 
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

const SocialContainer = styled.div``;

const SocialLink = styled.a`
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background 0.25s;
    color: rgba(0, 0, 0, 0.75);

    &:hover {
        background: rgba(255,255,255,0.25);
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