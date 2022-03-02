/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../i18n/config';
import '../styles/custom.scss';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Main from '@/layout/Main';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		ReactGA.initialize('G-WL5GYCY5QG');
		ReactGA.pageview(window.location.pathname + window.location.search);
		TagManager.initialize({ gtmId: 'GTM-WSCGQG7' });
	}, []);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="og:title" content="Vinyl Depository" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:url" content="https://vinyldepository.com/" />
				<meta
					name="description"
					content="We're about to change how you discover and buy records online. Vinyl Depository is a soon to be Marketplace, aiming to deliver the best user experience for both record lovers and collectors."
				/>

				<title>Vinyl Depository</title>

				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</>
	);
}

export default MyApp;
