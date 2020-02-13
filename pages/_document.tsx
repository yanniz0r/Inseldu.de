import React from 'react';
import NextDocument, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Document extends NextDocument {

    static async getInitialProps(context: DocumentContext) {
        const styleSheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;
        context.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => styleSheet.collectStyles(<App {...props}/>)
        });
        const defaultInitialProps = await NextDocument.getInitialProps(context);

        return {
            ...defaultInitialProps,
            styles: [
                defaultInitialProps.styles,
                styleSheet.getStyleElement()
            ]
        };
    }

}