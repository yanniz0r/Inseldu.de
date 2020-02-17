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
    max-height: 700px;
    overflow: hidden;
`;

export const References = () => {
    return <ReferencesWrapper>
        <Slider>
            <Slide>
                <h3>Binckebanck.com</h3>
                <ReferenceImageWrapper>
                    <ReferenceImage src="/images/references/binckebanck.com_.png"/>
                </ReferenceImageWrapper>
            </Slide>
            <Slide>
                <h3>Mysticalsouls.com</h3>
                <ReferenceImageWrapper>
                    <ReferenceImage src="/images/references/mysticalsouls.de_.png"/>
                </ReferenceImageWrapper>
            </Slide>
        </Slider>
    </ReferencesWrapper>
}
