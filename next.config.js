module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
}

import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }
 
export default nextConfig;
