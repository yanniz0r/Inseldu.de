import React from 'react';
import Head from 'next/head';
import { PseudoTyper } from '../components/pseudo-typer';
import styled from 'styled-components';
import { Social } from '../partials/social';
import { Photos } from '../partials/photos';
import { References } from '../partials/references';

const FullSizeContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Headlines = styled.div`
	padding: 2rem;
`;

const WhatIsYanniz0rText = styled.span`
	color: rgba(0,0,0,0.5);
`;

const thingsThatYanniz0rIs = [
	"software developer",
	"musician",
	"photographer",
	"fan of owls",
	"nice dude to hang out with"
];

const Home = () => (
	<div>
		<Head>
			<title>Yannic Inselmann</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<FullSizeContainer>
			<Headlines>
				<h1>Moin, my name is Yannic Inselmann</h1>
				<h2>I'm a <WhatIsYanniz0rText><PseudoTyper words={thingsThatYanniz0rIs}/></WhatIsYanniz0rText>.</h2>
			</Headlines>
			<Social/>
		</FullSizeContainer>
		<Photos/>
		<References/>
	</div>
)

export default Home
