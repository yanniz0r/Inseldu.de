import React from 'react'
import Head from 'next/head'
import { PseudoTyper } from '../components/pseudo-typer'
import styled from 'styled-components'

const FullSizeContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Headlines = styled.div`
	padding: 2rem;
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
				<h2>I'm a <PseudoTyper words={thingsThatYanniz0rIs}/>.</h2>
			</Headlines>
		</FullSizeContainer>
	</div>
)

export default Home
