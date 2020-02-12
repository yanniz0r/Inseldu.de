import React from 'react';
import NextApp from 'next/app';
import { GlobalStyles } from '../components/global-styles';

export default class App extends NextApp {

    render() {
        const { Component } = this.props;
        return <>
            <GlobalStyles/>
            <Component/>
        </>;
    }

}