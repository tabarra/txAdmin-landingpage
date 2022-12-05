import Head from 'next/head';
import React from 'react';
import { TxMetaFields } from '../../config/config';

export default function HtmlHead() {
    return (
        <Head>
            <title>{TxMetaFields.title}</title>
            <link rel='icon' href='./favicon.png' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <meta name='theme-color' content='#0EB880' />
            <meta name='description' content={TxMetaFields.description} />
            <meta name='keywords' content={TxMetaFields.keywords} />
            <meta property='og:type' content='website' />
            <meta property='og:site_name' content='txAdmin' />
            <meta property='og:title' content={TxMetaFields.title} />
            <meta property='og:description' content={TxMetaFields.description} />
            <meta property='og:url' content='https://txadm.in/' />
            <meta property='og:image' content='https://txadm.in/tx-discord-logo.png' />
            <link rel='canonical' href='https://txadm.in/' />
        </Head>
    )
}
