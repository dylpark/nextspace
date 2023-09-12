/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com'], // Host name was causing an error on sign in.
    },
};

module.exports = nextConfig;
