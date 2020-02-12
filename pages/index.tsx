import React from 'react'
import Head from 'next/head'
import { PseudoTyper } from '../components/pseudo-typer'

const thingsThatYanniz0rIs = [
	"software developer",
	"musician",
	"photographer",
	"fan of owls",
	"nice dude to hang out with"
]

const Home = () => (
	<div>
		<Head>
			<title>Yannic Inselmann</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<h1>Moin, my name is Yannic Inselmann</h1>
		<h2>I'm a <PseudoTyper words={thingsThatYanniz0rIs}/>.</h2>
	</div>
)

export default Home
