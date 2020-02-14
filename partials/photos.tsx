import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { ImagesAPIResponse } from "../types/api";

const photoAspectRatioPadding = (9 / 16) * 100;

const Wrapper = styled.div`
    background: black;
    color: #fff;
    padding: 5rem;
`;

const PhotosWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

const Photo = styled.img`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
`;

const PhotoWrapper = styled.div`
    background: red;
    position: relative;
    padding-top: ${photoAspectRatioPadding}%;
    overflow: hidden;
`;

// TODO Considerations regarding non landscape pictures
export const Photos: FC = () => {
    const [photos, setPhotos] = useState<ImagesAPIResponse>()
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/images")
            .then((response) => response.json())
            .then((response: ImagesAPIResponse) => {
                setPhotos(response);
                setLoading(false);
            })
    }, []);


    return <Wrapper>
        <h1>Some of my photos</h1>
        {isLoading &&
            <h2>Loading the good stuff...</h2>
        }
        {!isLoading &&
            <PhotosWrapper>
                {photos?.map(photo =>
                    <PhotoWrapper>
                        <Photo src={photo.url} alt={photo.title}/>
                    </PhotoWrapper>
                )}
            </PhotosWrapper>
        }
    </Wrapper>
}