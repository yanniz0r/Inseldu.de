import React from 'react';
import { Slider, Slide } from '../components/slider';
import styled from 'styled-components';

const ReferencesWrapper = styled.div`
    padding: 32px;  
`;

const ReferenceImage = styled.img`
    max-width: 100%;
`;

const ReferenceImageWrapper = styled.div`
    max-height: 90vh;
    border-radius: 4px;
    overflow: hidden;
`;

const ReferenceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

const ReferenceContent = styled.div`
    display: flex;
    align-items: center;
`;

const ReferenceLink = styled.a`
    background: rgba(255,255,255,0.78);
    padding: 8px 16px;
    color: black;
    text-decoration: none;
`;

export const References = () => {
    return <ReferencesWrapper>
        <Slider>
            <Slide>
                <ReferenceWrapper>
                    <ReferenceImageWrapper>
                        <ReferenceImage src="/images/references/binckebanck.com_.png"/>
                    </ReferenceImageWrapper>
                    <ReferenceContent>
                        <div>
                            <h3>Binckebanck.com</h3>
                            <ReferenceLink href="http://binckebanck.com">See live in action</ReferenceLink>
                        </div>
                    </ReferenceContent>
                </ReferenceWrapper>
            </Slide>
            <Slide>
                <ReferenceWrapper>
                    <ReferenceImageWrapper>
                        <ReferenceImage src="/images/references/mysticalsouls.de_.png"/>
                    </ReferenceImageWrapper>
                    <ReferenceContent>
                        <div>
                            <h3>Mysticalsouls.de</h3>
                            <p>
                                This project consisted of the concept, development and deployment of a personal blog.
                                It's based on the CMS system Wordpress which is customized by a theme custom tailored for this site.
                            </p>
                            <ReferenceLink href="http://mysticalsouls.de">See live in action</ReferenceLink>
                        </div>
                    </ReferenceContent>
                </ReferenceWrapper>
            </Slide>
        </Slider>
    </ReferencesWrapper>
}
