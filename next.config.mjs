/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'certifiedlogomaker.com',
        },
        {
          protocol: 'http',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  