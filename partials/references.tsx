import React from 'react';
import { Slider, Slide } from '../components/slider';
import styled from 'styled-components';

const ReferencesWrapper = styled.div`
    padding: 32px;  
`;

const ReferenceImage = styled.img`
    max-width: 100%;
    max-height: 500px;
`;

const ReferenceImageWrapper = styled.div`
    border-radius: 4px;
    flex: 1;
    justify-content: center;
    display: flex;
    overflow: hidden;
`;

const ReferenceList = styled.ul`
    font-family: 'Helvetica', 'Arial';
`;

const ReferenceWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 32px;
    max-width: 1024px;
    margin: 0 auto;
`;

const ReferenceContent = styled.div`
    display: flex;
    align-items: center;
`;

const ReferenceParagraph = styled.p`
    font-family: 'Helvetica', 'Arial';
`;

const ReferenceLink = styled.a`
    background: rgba(255,255,255,0.78);
    display: inline-block;
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
                        <ReferenceImage src="/images/references/partymate.png"/>
                    </ReferenceImageWrapper>
                    <ReferenceContent>
                        <div>
                            <h3>PartyMate</h3>
                            <ReferenceParagraph>A project about finding a suitable party for your night out.</ReferenceParagraph>
                            <ReferenceList>
                                <li>Lead developer of user facing apps for the platforms web, iOS and android</li>
                                <li>Development of the backend</li>
                                <li>Operation of applications</li>
                                <li>Process optimization through continuous deployment and continuous integration</li>
                            </ReferenceList>
                            <ReferenceLink href="https://partymate.party">See live in action</ReferenceLink>
                        </div>
                    </ReferenceContent>
                </ReferenceWrapper>
            </Slide>
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
                            <ReferenceParagraph>
                                This project consisted of the concept, development and deployment of a personal blog.
                                It's based on the CMS system Wordpress which is customized by a theme custom tailored for this site.
                            </ReferenceParagraph>
                            <ReferenceLink href="http://mysticalsouls.de">See live in action</ReferenceLink>
                        </div>
                    </ReferenceContent>
                </ReferenceWrapper>
            </Slide>
        </Slider>
    </ReferencesWrapper>
}
