import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../i18n/config';
import '../styles/custom.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Vinyl Depository landing page" />

				<title>Vinyl Depository</title>
			</Head>
			<Header />
			<Component {...pageProps} />;
			<Footer />
		</>
	);
}

export default MyApp;
