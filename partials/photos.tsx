import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import json from '../data/gallery-data.json';

const photoAspectRatioPadding = (9 / 16) * 100;

const Wrapper = styled.div`
    background: black;
    color: #fff;
    padding: 5rem;
`;

const PhotosWrapper = styled.div`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

const Photo = styled.img`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
`;

const PhotoWrapper = styled.div<{ description: string }>`
    position: relative;
    padding-top: ${photoAspectRatioPadding}%;
    overflow: hidden;

    &::before {
        transition: all 0.25s;
        content: "${props => props.description}";
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        z-index: 10;
        backdrop-filter: blur(8px);
        padding: 8px;
        text-align: center;
    }

    &:hover::before{
        opacity: 1;
    }
`;

// TODO Considerations regarding non landscape pictures
export const Photos: FC = () => {
    return <Wrapper>
        <h1>Some of my photos</h1>
        <PhotosWrapper>
            {json.map((photo, index) =>
                <PhotoWrapper description={photo.description} key={`gallery-image-${index}`}>
                    <Photo src={photo.url} alt={photo.description}/>
                </PhotoWrapper>
            )}
        </PhotosWrapper>
    </Wrapper>
}