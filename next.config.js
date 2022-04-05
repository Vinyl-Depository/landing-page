/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src', './tests'],
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
