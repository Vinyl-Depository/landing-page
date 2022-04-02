/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src', './tests'],
	},
	experimental: {
		nextScriptWorkers: true,
	},
};

module.exports = nextConfig;
