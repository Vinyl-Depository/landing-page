/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src', './tests'],
		ignoreDuringBuilds: true,
	},
	experimental: {
		nextScriptWorkers: true,
	},
};

module.exports = nextConfig;
