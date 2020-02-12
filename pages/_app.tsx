import React from 'react';
import NextApp from 'next/app';
import { GlobalStyles } from '../components/global-styles';
import { Normalize } from 'styled-normalize';

export default class App extends NextApp {

    render() {
        const { Component } = this.props;
        return <>
            <Normalize/>
            <GlobalStyles/>
            <Component/>
        </>;
    }

}